#include <iostream>
#include <cstring>

int main()
{
	char sentence[32] = "This is the sentence.";
	std::cout << sentence << std::endl;
	std::cout << sentence << std::endl;
	
	strcpy(sentence, "This is another sentence.");
	std::cout << sentence;
	
	return 0;
}