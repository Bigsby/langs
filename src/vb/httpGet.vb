Public Module Program
    Sub Main()
        Dim client = New System.Net.WebClient
        Dim content = client.DownloadString("http://langs.bigsbyspot.org/files/webcall.txt")

        System.Console.Write(content)
    End Sub
End Module