#include <stdio.h>

int main()
{
    int result = 1 == 2;
    printf("1 equals 2 is %d\n", result);
	
    result = 1 != 2;
    printf("1 not equals 2 is %d\n", result);
	
	result = 1 > 2;
	printf("1 larger than 2 is %d\n", result);
	
	result = 1 >= 2;
	printf("1 larger than or equals 2 is %d\n", result);
	
	result = 1 < 2;
	printf("1 less than 2 is %d\n", result);
	
	result = 1 <= 2;
	printf("1 less than or equals 2 is %d", result);

	return 0;
}