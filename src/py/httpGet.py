import urllib.request
response = urllib.request.urlopen("http://langs.bigsbyspot.org/files/webcall.txt")
responseBytes = response.read()
data = responseBytes.decode("utf-8")
print(data)