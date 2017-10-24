Imports System

Public Module Program
    Sub Main()

        For i As Integer = 1 To 100
            If i Mod 3 = 0 And i Mod 5 = 0
                Console.Write("FizzBuzz")
            ElseIf i Mod 3 = 0
                Console.Write("Fizz")
            ElseIf i Mod 5 = 0
                Console.Write("Buzz")
            Else
                Console.Write(i)
            End If

            If i Mod 10 = 0
                Console.WriteLine
            Else
                Console.Write(",")
            End If
        Next
   End Sub
End Module