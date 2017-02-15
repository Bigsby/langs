let mutable result = 1 = 2
printfn "1 equals 2 is %b" result

result <- 1 <> 2
printfn "1 not equals 2 is %b" result

result <- 1 > 2
printfn "1 larger than 2 is %b" result

result <- 1 >= 2
printfn "1 larger than or equals 2 is %b" result

result <- 1 < 2
printfn "1 less than 2 is %b" result

result <- 1 <= 2
printfn "1 less than or equals 2 is %b" result