using System;
using System.IO;

class Program
{
	public static void Main()
	{
        var directory = new DirectoryInfo("../files");

        foreach (var folder in directory.GetDirectories())
        {
            Console.WriteLine("/" + folder.Name);
        }

        foreach (var file in directory.GetFiles())
        {
            Console.WriteLine(file.Name + "," + file.Length);
        }
	}
}