#include <iostream>
#include <fstream>
#include <string>

int main()
{
    std::ifstream contentFileStream("../files/content.txt");

    if (contentFileStream.is_open())
    {
        std::cout << contentFileStream.rdbuf() << std::endl;
        contentFileStream.close();
    }

    std::ifstream multilineFileStream("../files/multipleLines.txt");
    std::string line;
    if (multilineFileStream.is_open())
    {
        while (getline(multilineFileStream, line))
            std::cout << "- " << line << std::endl;

        multilineFileStream.close();
    }

    return 0;
}