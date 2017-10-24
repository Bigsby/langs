#include <stdio.h>

void DoStuff();
int DoSum(int, int);

void DoStuff()
{
    printf("Doing stuff!\n");
}

int DoSum(int a, int b)
{
    return a + b;
}

int main()
{
    DoStuff();
    printf("2 + 1 = %d", DoSum(2, 1));

    return 0;
}