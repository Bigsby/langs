#include <stdio.h>
#include <errno.h>

#define SOME_INT 1234

void DoStuff(int);

void DoStuff(int inError)
{
    if (inError)
        errno = SOME_INT;
    else
        printf("Doing stuff!\n");
}

main()
{
    DoStuff(0);
    if (errno)
    {
        perror("ERROR");
    }
    else
    {
        DoStuff(1);
        if (errno)
        {
            perror("ERROR");
        }
        else
        {
            DoStuff(1); // not reached
            if (errno)
            {
                perror("ERROR");
            }
        }
    }
}