class Program
{
	public static void Main()
	{
		var value = true;
        if (value)
        {
		    System.Console.WriteLine("Got true");
        }
        else
        {
            System.Console.WriteLine("Got else");
        }
		
        value = false;
        if (value)
		    System.Console.WriteLine("Got true");
        else
            System.Console.WriteLine("Got else");

        var result = 3;
        if (result == 1)
            System.Console.WriteLine("Got true");
        else if (result == 2)
            System.Console.WriteLine("Got else");
        else
            System.Console.WriteLine("Got if else");
	}
}