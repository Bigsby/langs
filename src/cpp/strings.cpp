#include <iostream>
#include <string>

using namespace std;

int main()
{
	char* joining = "Joining ";
	char* strings = "strings.";
	std::string result = std::string(joining) + std::string(strings);
	std::cout << result.c_str() << std::endl;
	
	std::cout << "First line\nSecond line" << std::endl;
	
	int value = 3;
	std::cout << "The value " << std::to_string(value) << " interpolated";
	return 0;
}