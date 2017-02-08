class Program
{
	static void DoStuff()
	{
		System.Console.WriteLine("Doing stuff!");
	}
	
	static int DoSum(int a, int b)
	{
		return a + b;
	}
	
	public static void Main()
	{
		DoStuff();
		System.Console.WriteLine("2 + 1 = " + DoSum(2, 1));
	}
}