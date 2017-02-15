#include <iostream>

int main()
{
	char* sentence = "This is the sentence.";
	std::cout << sentence << std::endl;
	std::cout << sentence << std::endl;
	
	sentence = "This is another sentence.";
	std::cout << sentence;
	
	return 0;
}