using System;

class Program
{
    private static int GetAgeInYears(DateTime birthday)
    {
        var today = DateTime.Today;
        return today.Year - birthday.Year - (today.DayOfYear < birthday.DayOfYear ? 1 : 0);
    }

	public static void Main()
	{
        var birthday = new DateTime(1939, 10, 27);
        var age = GetAgeInYears(birthday);
        Console.WriteLine($"John Cleese was born in {birthday.ToString("yyyy-MM-dd")} and is {age} years old.");

        var parsedDate = DateTime.Parse("1975-11-10T01:25:00");
        Console.Write($"Parsed date is {parsedDate.ToString("s")}");
	}
}