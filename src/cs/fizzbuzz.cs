using System;

class Program
{
	public static void Main()
	{
        for (var i = 1; i <= 100; i++){
            if (i % 3 == 0 && i % 5 == 0)
                Console.Write("FizzBuzz");
            else if (i % 3 == 0)
                Console.Write("Fizz");
            else if (i % 5 == 0)
                Console.Write("Buzz");
            else
                Console.Write(i);

            if (i % 10 == 0)
                Console.WriteLine();
            else
                Console.Write(",");
        }
	}
}