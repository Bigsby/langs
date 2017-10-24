Public Module Program
    Sub Main()
        Dim client As System.Net.WebClient = New System.Net.WebClient
        Dim content As String = client.DownloadString("http://langs.bigsbyspot.org/files/webcall.txt")

        System.Console.Write(content)
    End Sub
End Module