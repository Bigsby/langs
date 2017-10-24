#include <stdio.h>

int main()
{
    printf("true and false is %d\n", 1 && 0);	
	printf("true or false is %d\n", 1 || 0);
	printf("true xor false is %d\n", 1 ^ 0);
	printf("not true is %d", !1);
    
    return 0;
}