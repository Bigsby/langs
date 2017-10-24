Public Module Program
    Sub DoStuff(ByVal inError as Boolean)
        If inError
            Throw New System.Exception("An error occured")
        End If
        System.Console.WriteLine("Doing stuff!")
    End Sub

    Sub Main()
        Try
            DoStuff(False)
            DoStuff(True)
            DoStuff(False)
        Catch ex As System.Exception
            System.Console.WriteLine("ERROR: " & ex.Message)
        End Try
    End Sub
End Module