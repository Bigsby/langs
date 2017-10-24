Imports System

Public Module Program
    Function GetAgeInYears(ByVal birthday As DateTime) As Integer
        Dim today As DateTime = DateTime.Today
        GetAgeInYears = today.Year - birthday.Year - If(today.DayOfYear < birthday.DayOfYear, 1, 0)
    End Function

    Sub Main()
        Dim birthday As DateTime = New DateTime(1939, 10, 27)
        Dim age As Integer = GetAgeInYears(birthday)
        Console.WriteLine("John Cleese was born in " & birthday.ToString("yyyy-MM-dd") & " and is " & age & " years old.")

        Dim parsedDate As DateTime= DateTime.Parse("1975-11-10T01:25:00")
        Console.Write("Parsed date is " & parsedDate.ToString("s"))
    End Sub
End Module