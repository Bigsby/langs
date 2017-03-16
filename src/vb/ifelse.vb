Public Module Program
    Sub Main()
        Dim value as Boolean = True
        If value Then
		    System.Console.WriteLine("Got true")
        Else
            System.Console.WriteLine("Got else")
        End If
		
        value = False
        If value
		    System.Console.WriteLine("Got true")
        Else
            System.Console.WriteLine("Got else")
        End If

        Dim result As Integer = 3
        if result = 1
            System.Console.WriteLine("Got true")
        ElseIf result = 2
            System.Console.WriteLine("Got else")
        Else
            System.Console.WriteLine("Got if else")
        End If
    End Sub
End Module