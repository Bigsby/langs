#include <iostream>

int main()
{
    for (int i = 1; i <= 100; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
            std::cout << "FizzBuzz";
        else if (i % 3 == 0)
            std::cout << "Fizz";
        else if (i % 5 == 0)
            std::cout << "Buzz";
        else
            std::cout << i;

        std::cout << ",";
        if (i % 10 == 0)
            std::cout << std::endl;
    }

    return 0;
}