#include <iostream>

int main()
{
    bool value = true;
    if (value)
    {
        std::cout << "Got true" << std::endl;
    }
    else
    {
        std::cout << "Got else" << std::endl;
    }

    value = false;
    if (value)
        std::cout << "Got true" << std::endl;
    else
        std::cout << "Got else" << std::endl;

    int result = 3;
    if (value == 1)
        std::cout << "Got true";
    else if (result == 2)
        std::cout << "Got else";
    else
        std::cout << "Got if else";

    return 0;
}