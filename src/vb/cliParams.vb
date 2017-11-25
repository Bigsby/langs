Imports System

Public Module Program
    Sub Main()
        Dim args as String() = Environment.GetCommandLineArgs()

        if args.Length = 1
            System.Console.WriteLine("No parameters")
        ElseIf args.Length = 2
            System.Console.WriteLine("Parameters is " + args(1))
        Else
            System.Console.WriteLine("Too many parameters")
        End If
    End Sub
End Module