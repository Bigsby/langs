#include <iostream>
#include <ctime>
#include <cstdio>

using namespace std;

int getAgeInYears(tm birthday)
{
    time_t now = time(NULL);
    tm localNow = *localtime(&now);

    return localNow.tm_year - birthday.tm_year - (localNow.tm_yday < birthday.tm_yday ? 1 : 0);
}

tm parseDate(char* value)
{
    tm result;
    sscanf(value, 
        "%i-%i-%iT%i:%i:%i", 
        &(result.tm_year), 
        &(result.tm_mon), 
        &(result.tm_mday), 
        &(result.tm_hour), 
        &(result.tm_min), 
        &(result.tm_sec));

    result.tm_year -= 1900;
    result.tm_mon -= 1;

    return result;
}

int main()
{
    tm birthday; 
    birthday.tm_year = 1939 - 1900;
    birthday.tm_mon = 10 - 1;
    birthday.tm_mday = 27;

    char formattedBirthday[50];
    strftime(formattedBirthday, 50, "%F", &birthday);
    int age = getAgeInYears(birthday);
    cout << "John Cleese was born in " << formattedBirthday << " and is " << age << " years old." << endl;

    char dateString[] = "1975-11-10T01:25:00";
    tm parsedDate = parseDate((dateString));
    char formattedParsedDate[50];
    strftime(formattedParsedDate, 50, "%FT%T", &parsedDate);
    cout << "Parsed date is " << formattedParsedDate;


    return 0;
}