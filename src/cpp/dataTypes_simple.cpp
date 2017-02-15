#include <iostream>

int main()
{
	char c = 'a';
	std::cout << typeid(c).name() << std::endl; 		// -128 to 127 or 0 to 255
	
	signed char sc = 2;
	std::cout << typeid(sc).name() << std::endl; 	// 0 to 255
	
	unsigned char uc = 2;
	std::cout << typeid(uc).name() << std::endl;		// -128 to 127
	
	int i = 1;
	std::cout << typeid(i).name() << std::endl;		// -2147483648 to 2147483647
	
	signed int si = 1;
	std::cout << typeid(si).name() << std::endl;		// 
	
	unsigned int ui = 1;
	std::cout << typeid(ui).name() << std::endl;		// 
	
	return 0;
}