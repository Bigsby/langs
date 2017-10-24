Public Module Program
    Sub Main()
        System.Console.WriteLine(System.IO.File.ReadAllText("../files/content.txt"))

        For Each line As String In System.IO.File.ReadAllLines("../files/multipleLines.txt")
            System.Console.WriteLine("- " & line)
        Next
    End Sub
End Module