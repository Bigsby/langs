#include <stdio.h>

int main()
{
    int c;
    FILE *file;
    
    file = fopen("../files/content.txt", "r");

    fseek(file, 0, SEEK_END); 
    long size = ftell(file);
    rewind(file);

    char content[size];
    fread(content, 1, size, file);
    printf(content);
    fclose(file);

    printf("\n");

    file = fopen("../files/multipleLines.txt", "r");
    if (file) {
        while ((c = getc(file)) != EOF)
            putchar(c);
        fclose(file);
    }
    
    return 0;
}