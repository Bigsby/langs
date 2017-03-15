#include <windows.h>
#include <string>
#include <iostream>

using namespace std;

#pragma comment(lib, "ws2_32.lib")

int main()
{
  WSADATA wsaData;
  if (WSAStartup(0x101, &wsaData) != 0)
  {
    cout << "Unable to open Winsock library.";
    return WSAGetLastError();
  }

  SOCKET conn = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
  if (conn == INVALID_SOCKET)
  {
    cout << "Unable to create socket.";
    return -1;
  }

  struct hostent *hp = gethostbyname("langs.bigsbyspot.org");
  if (hp == NULL)
  {
    closesocket(conn);
    cout << "Unable to result domain.";
    return -1;
  }

  struct sockaddr_in internetAddress;
  internetAddress.sin_addr.s_addr = *((unsigned long *)hp->h_addr);
  internetAddress.sin_family = AF_INET;
  internetAddress.sin_port = htons(80);

  if (connect(conn, (struct sockaddr *)&internetAddress, sizeof(internetAddress)))
  {
    closesocket(conn);
    cout << "Unable to open socket connection.";
    return -1;
  }

  string httpRequest = "GET /files/webcall.txt\r\nHost: langs.bigsbyspot.org\r\n\r\n";
  send(conn, httpRequest.c_str(), httpRequest.size(), 0);

  const int bufSize = 512;
  char readBuffer[bufSize];
  char *httpResponse = NULL;
  long totalBytesRead = 0, thisReadSize;

  while (1)
  {
    memset(readBuffer, 0, bufSize);
    thisReadSize = recv(conn, readBuffer, bufSize, 0);

    if (thisReadSize <= 0)
      break;

    httpResponse = (char *)realloc(httpResponse, thisReadSize + totalBytesRead);

    memcpy(httpResponse + totalBytesRead, readBuffer, thisReadSize);
    totalBytesRead += thisReadSize;
  }

  const char *contentSeperator = "\r\n\r\n";
  char *headersEnd = strstr(httpResponse, contentSeperator);
  int headerLength = headersEnd - httpResponse;
  headerLength += strlen(contentSeperator);

  long contentLength = totalBytesRead - headerLength;
  char *content = new char[contentLength + 1];
  memcpy(content, httpResponse + headerLength, contentLength);
  content[contentLength] = 0x0;

  closesocket(conn);
  WSACleanup();

  std::cout << content;

  return 0;
}