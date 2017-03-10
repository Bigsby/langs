class Program
{
	static void DoStuff(bool inError)
	{
		if (inError)
        {
            throw new System.Exception("An error occured!");
        }
        System.Console.WriteLine("Doing stuff!");
	}
	
	public static void Main()
	{
		try
        {
            DoStuff(false);
            DoStuff(true);
            DoStuff(false);
        }
        catch (System.Exception ex)
        {
            System.Console.WriteLine($"ERROR: {ex.Message}");
        }
	}
}