#include <iostream>
#include <string>
#include <sstream>

using namespace std;

// needed because of this http://tehsausage.com/mingw-to-string
namespace std
{
    template < typename T > std::string to_string( const T& n )
    {
        std::ostringstream stm ;
        stm << n ;
        return stm.str() ;
    }
}

int main()
{
	char joining[] = "Joining ";
	char strings[] = "strings.";
	std::string result = std::string(joining) + std::string(strings);
	std::cout << result.c_str() << std::endl;
	
	std::cout << "First line\nSecond line" << std::endl;
	
	int value = 3;
	std::cout << "The value " << std::to_string(value) << " interpolated";
	return 0;
}