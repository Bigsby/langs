#include <iostream>

void DoStuff()
{
	std::cout << "Doing stuff!\n";
}

void DoStuffWithThis(char* value)
{
	std::cout << "Doing stuff whit " << value << "\n";
}

int main()
{
	DoStuff();
	DoStuff();
	
	DoStuffWithThis("This");
	DoStuffWithThis("That");
	
	return 0;
}