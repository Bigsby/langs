#include <stdio.h>

main()
{
    int value = 1;
    if (value)
    {
        printf("Got true\n");
    }
    else
    {
        printf("Got else\n");
    }

    value = 0;
    if (value)
        printf("Got true\n");
    else
        printf("Got else\n");

    int result = 3;
    if (value == 1)
        printf("Got true");
    else if (result == 2)
        printf("Got else");
    else
        printf("Got if else");
}