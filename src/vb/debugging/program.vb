Imports System

Public Module Program
    Sub Main()

        For value = 1 To 10
            System.Diagnostics.Debugger.Break()
            Console.WriteLine(value)
        Next
   End Sub
End Module