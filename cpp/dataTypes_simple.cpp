#include <iostream>

int main()
{
	char c = 'a';
	std::cout << typeid(c).name() << "\n"; 		// -128 to 127 or 0 to 255
	
	signed char sc = 2;
	std::cout << typeid(sc).name() << "\n"; 	// 0 to 255
	
	unsigned char uc = 2;
	std::cout << typeid(uc).name() << "\n";		// -128 to 127
	
	int i = 1;
	std::cout << typeid(i).name() << "\n";		// -2147483648 to 2147483647
	
	signed int si = 1;
	std::cout << typeid(si).name() << "\n";		// 
	
	unsigned int ui = 1;
	std::cout << typeid(ui).name() << "\n";		// 
	
	return 0;
}