#include <stdio.h>

int main()
{
	char* sentence = "This is the sentence.";
	printf("%s\n", sentence);
	printf("%s\n", sentence);
	
	sentence = "This is another sentence.";
	printf("%s", sentence);
    
    return 0;
}