#include <stdio.h>

int main()
{
	printf("What say you?\n");
    char userInput[100];
    fgets(userInput, sizeof(userInput), stdin);
    //gets(userInput);
    printf("You said: ");
    puts(userInput);

    return 0;
}