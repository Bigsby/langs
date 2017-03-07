using System.Text.RegularExpressions;
using static System.Console;

class Program
{
	public static void Main()
	{
		WriteLine("Is '^\\d+$' mathed by '123456'?");
        if (new Regex("^[0-9]+$").IsMatch("123456"))
        {
            WriteLine("yes");
        }
        else
        {
            WriteLine("no");
        }

        WriteLine("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'");
        var codeRegexp = new Regex("^([a-z]+)\\-(\\d+)$");
        var matches = codeRegexp.Match("abcdef-12345");
        WriteLine($"Found {matches.Groups.Count} groups.");
        for (int groupIndex = 0; groupIndex < matches.Groups.Count; groupIndex++)
        {
            WriteLine($"[{groupIndex}] = {matches.Groups[groupIndex]}");
        }
	}
}