Public Module Program
    Sub Main()
        Dim result As Boolean = 1 = 2
		System.Console.WriteLine("1 equals 2 is " & result)
		
		result = 1 <> 2
		System.Console.WriteLine("1 not equals 2 is " & result)
		
		result = 1 > 2
		System.Console.WriteLine("1 larger than 2 is " & result)
		
		result = 1 >= 2
		System.Console.WriteLine("1 larger than or equals 2 is " & result)
		
		result = 1 < 2
		System.Console.WriteLine("1 less than 2 is " & result)
		
		result = 1 <= 2
		System.Console.WriteLine("1 less than or equals 2 is " & result)
    End Sub
End Module