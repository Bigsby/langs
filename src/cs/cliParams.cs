using static System.Console;

class Program
{
	public static void Main(string[] args)
	{
        if (args.Length == 0)
        {
            WriteLine("No paramters");
        } else if (args.Length == 1)
        {
            WriteLine("Parameter is " + args[0]);
        } else
        {
            WriteLine("Too many parameters");
        }
	}
}