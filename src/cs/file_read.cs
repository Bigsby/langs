class Program
{
	public static void Main()
	{
        System.Console.WriteLine(System.IO.File.ReadAllText("../files/content.txt"));

        foreach (var line in System.IO.File.ReadAllLines("../files/multipleLines.txt"))
            System.Console.WriteLine($"- {line}");
	}
}