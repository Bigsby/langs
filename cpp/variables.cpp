#include <iostream>

int main()
{
	char* sentence = "This is the sentence.";
	std::cout << sentence << "\n";
	std::cout << sentence << "\n";
	
	sentence = "This is another sentence.";
	std::cout << sentence;
	
	return 0;
}