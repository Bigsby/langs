#include <iostream>
#include <string>

int main()
{
	std::cout << "What say you?" << std::endl;
    std::string userInput;
    std::cin >> userInput;
    std::cout << "You said: " << userInput;
	return 0;
}