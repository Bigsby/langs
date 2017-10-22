#include <stdio.h>

main()
{
    int setOfItems[3] = {1, 2, 3};
    int i;

    for (i= 0; i < sizeof(setOfItems)/sizeof(int); i++)
    {
        printf("%d\n", setOfItems[i]);  
    }
}