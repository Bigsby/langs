#include <iostream>

int main()
{
	bool result = 1 == 2;
	std::cout << "1 equals 2 is " << result << std::endl;
	
	result = 1 != 2;
	std::cout << "1 not equals 2 is " << result << std::endl;
	
	result = 1 > 2;
	std::cout << "1 larger than 2 is " << result << std::endl;
	
	result = 1 >= 2;
	std::cout << "1 larger than or equals 2 is " << result << std::endl;
	
	result = 1 < 2;
	std::cout << "1 less than 2 is " << result << std::endl;
	
	result = 1 <= 2;
	std::cout << "1 less than or equals 2 is " << result << std::endl;
	
	return 0;
}