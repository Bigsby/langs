#include <iostream>

int main(int argc, char *argv[])
{
    if (argc == 1)
        std::cout << "No parameters";
    else if (argc == 2)
        std::cout << "Parameter is " << argv[1];
    else
        std::cout << "Too many parameters";

    return 0;
}