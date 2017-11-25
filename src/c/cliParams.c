#include <stdio.h>

int main(int argc, char *argv[])
{
    if (argc == 1)
        printf("No parameters");
    else if (argc == 2)
        printf("Parameters is %s", argv[1]);
    else
        printf("Too many parameters");
        
    return 0;
}