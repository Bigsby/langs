#include <iostream>

int main()
{
    int setOfItems[] = {1, 2, 3};

    for (auto &item : setOfItems)
        std::cout << item << std::endl;

    return 0;
}