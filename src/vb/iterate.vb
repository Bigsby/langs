Public Module Program
    Sub Main()
        Dim setOfItems As Integer() = New Integer() { 1, 2, 3 }

        For Each Item as Integer In setOfItems
            System.Console.WriteLine(item)
        Next
   End Sub
End Module