class Program
{
	public static void Main()
	{
        var client = new System.Net.WebClient();
        var data = client.DownloadString("http://langs.bigsbyspot.org/files/webcall.txt");
		System.Console.Write(data);
	}
}