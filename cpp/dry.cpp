#include <iostream>

void DoStuff()
{
	std::cout << "Doing stuff!\n";
}

int DoSum(int a, int b)
{
	return a + b;
}

int main()
{
	DoStuff();
	std::cout << "2 + 1 = " << DoSum(2, 1);
	
	return 0;
}