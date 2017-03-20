Imports System

Public Module Program
    Public Class MontyPython
        Private _firstName As String
        Private _lastName As String

        Public Sub New(ByVal firstName As String, ByVal lastName As String)
            _firstName = firstName
            _lastName = lastName
        End Sub

        Public Property FirstName As String
            Get
                Return _firstName
            End Get
            Set(ByVal value As String)
                _firstName = value
            End Set
        End Property

        Public Property LastName As String
            Get
                Return _lastName
            End Get
            Set(ByVal value As String)
                _lastName = value
            End Set
        End Property

        Public Function FullName()
            FullName = FirstName + " " + LastName
        End Function
    End Class

    Sub Main()
        Dim montyPython = New MontyPython("John", "Cleese")
        Console.WriteLine("Monty Python is " + montyPython.FullName + ".")

        montyPython.FirstName = "Eric"
        montyPython.LastName = "Idle"
        Console.Write("Now, Monty Python is " + montyPython.FullName + ".")
    End Sub
End Module