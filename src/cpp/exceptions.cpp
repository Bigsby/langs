#include <exception>
#include <iostream>

void DoStuff(bool inError)
{
    if (inError)
    {
        throw std::runtime_error("An error occured!");
    }
    std::cout << "Doing stuff!" << std::endl;
}

int main()
{
    try
    {
        DoStuff(false);
        DoStuff(true);
        DoStuff(false); // not reached
    }
    catch (std::exception &ex)
    {
        std::cout << "ERROR: " << ex.what();
    }

    return 0;
}