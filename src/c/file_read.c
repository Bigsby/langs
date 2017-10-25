#include <stdio.h>

int main()
{
    int c;
    FILE *file;
    file = fopen("../files/content.txt", "r");
    if (file) {
        while ((c = getc(file)) != EOF)
            putchar(c);
        fclose(file);
    }

    file = fopen("../files/multipleLines.txt", "r");
    if (file) {
        while ((c = getc(file)) != EOF)
            putchar(c);
        fclose(file);
    }
    
    return 0;
}