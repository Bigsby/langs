#include <iostream>

int main()
{
    int setOfItems[] = {1, 2, 3};

    for (int &item : setOfItems)
        std::cout << item << std::endl;

    return 0;
}