#include <iostream>
#include <string>
#include <regex>

int main()
{
    std::cout << "Is '^\\d+$' mathed by '123456'?" << std::endl;
    if (std::regex_match("123456", std::regex("^[0-9]+$")))
    {
        std::cout << "yes" << std::endl;
    }
    else
    {
        std::cout << "no" << std::endl;
    }

    std::cout << "Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'" << std::endl;
    std::string test("abcdef-12345");
    std::regex codeRegexp("^([a-z]+)\\-(\\d+)$");
    std::smatch matches;
    if (std::regex_search(test, matches, codeRegexp))
    {
        std::cout << "Found " << matches.size() << " groups." << std::endl;

        for (int groupIndex = 0; groupIndex < matches.size(); groupIndex++)
        {
            std::cout << "[" << groupIndex << "] = " << matches.str(groupIndex) << std::endl;
        }
    }
    return 0;
}