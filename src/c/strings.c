#include <stdio.h>
#include <string.h>

main()
{
	char joining[10] = "Joining ";
    char strings[10] = "strings.";
    char result[20];
    strcpy(result, joining);
    strcat(result, strings);
    
    printf("%s\n", result);
	
	printf("First line\nSecond line\n");
	
    int value = 3;
    printf("The value %d interpolated", value);
}