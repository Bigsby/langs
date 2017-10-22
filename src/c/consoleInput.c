#include <stdio.h>

main()
{
	printf("What say you?\n");
    char userInput[100];
    gets(userInput);
    printf("You said: ");
    puts(userInput);
}