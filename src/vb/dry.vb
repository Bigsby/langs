Public Module Program
    Sub DoStuff()
        System.Console.WriteLine ("Doing stuff!")
    End Sub

    Function DoSum(ByVal a As Integer, ByVal b As Integer)
        DoSum = a + b
    End Function
   
    Sub Main()
        DoStuff
        System.Console.WriteLine($"2 + 1 = {DoSum(2, 1)}")
    End Sub
End Module