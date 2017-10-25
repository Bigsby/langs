Imports System
Imports System.IO

Public Module Program
    Sub Main()
        Dim directoryInfo As DirectoryInfo = new DirectoryInfo("../files")

        For Each folder As DirectoryInfo In directoryInfo.GetDirectories()
            Console.WriteLine("/" + folder.Name)
        Next
        
        For Each file As FileInfo In directoryInfo.GetFiles()
            Console.WriteLine(file.Name + "," + file.Length.ToString() + "B")
        Next
    End Sub
End Module