using System;

class MontyPython
{
    public MontyPython(string firstName, string lastName)
    {
        FirstName = firstName;
        LastName = lastName;
    }

    public string FirstName { get; set; }
    public string LastName { get; set; }

    public string FullName()
    {
        return $"{FirstName} {LastName}";
    }
}

class Program
{
	public static void Main()
	{
        var montyPython = new MontyPython("John", "Cleese");
		Console.WriteLine($"Monty Python is {montyPython.FullName()}.");

        montyPython.FirstName = "Eric";
        montyPython.LastName = "Idle";
        Console.Write($"Now, Monty Python is {montyPython.FullName()}.");
	}
}