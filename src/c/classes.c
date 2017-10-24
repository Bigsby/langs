#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct
{
    char firstName[32];
    char lastName[32];
} MontyPython;

const char* fullName(MontyPython);

const char* fullName(MontyPython montyPython)
{
    char *result = malloc(sizeof(char) * 128);
    
    strcpy(result, montyPython.firstName);
    strcat(result, " ");
    strcat(result, montyPython.lastName);

    return result;
}

main()
{
    MontyPython montyPython = { "John",  "Cleese" };
    printf("Monty Python is %s.\n", fullName(montyPython));

    strcpy(montyPython.firstName, "Eric");
    strcpy(montyPython.lastName, "Idle");

    printf("Now, Monty Python is %s.\n", fullName(montyPython));
}