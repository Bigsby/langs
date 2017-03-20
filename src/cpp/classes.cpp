#include <iostream>
#include <string>

using namespace std;

class MontyPython
{
  public:
    string FirstName;
    string LastName;

    string fullName()
    {
        return FirstName + " " + LastName;
    }

    MontyPython(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }
};

int
main()
{
    MontyPython montyPython = MontyPython("John", "Cleese");
    cout << "Monty Python is " << montyPython.fullName() << "." << endl;

    montyPython.FirstName = "Eric";
    montyPython.LastName = "Idle";
    cout << "Now, Monty Python is " << montyPython.fullName() << ".";

    return 0;
}