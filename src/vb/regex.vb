Imports System
Imports System.Text.RegularExpressions

Public Module Program
    Sub Main()
        Console.WriteLine("Is '^[0-9]+$' mathed by '123456'?")

        If New Regex("^[0-9]+$").IsMatch("123456")
            Console.WriteLine("yes")
        Else
            Console.WriteLine("no")
        End If

         Console.WriteLine("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'")
         Dim codeRegexp = new Regex("^([a-z]+)\\-(\\d+)$")
         Dim matches = codeRegexp.Match("abcdef-12345")
         Console.WriteLine($"Found {matches.Groups.Count} groups.")

         For groupIndex As Integer = 0 To matches.Groups.Count
             Console.WriteLine($"[{groupIndex}] = {matches.Groups(groupIndex)}")
         Next
    End Sub
End Module

' WriteLine("Is '^[0-9]+$' mathed by '123456'?");
' if (new Regex("^[0-9]+$").IsMatch("123456"))
' {
'     WriteLine("yes");
' }
' else
' {
'     WriteLine("no");
' }

' WriteLine("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'");
' var codeRegexp = new Regex("^([a-z]+)\\-(\\d+)$");
' var matches = codeRegexp.Match("abcdef-12345");
' WriteLine($"Found {matches.Groups.Count} groups.");
' for (int groupIndex = 0; groupIndex < matches.Groups.Count; groupIndex++)
' {
'     WriteLine($"[{groupIndex}] = {matches.Groups[groupIndex]}");
' }