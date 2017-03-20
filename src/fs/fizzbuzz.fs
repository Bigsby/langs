[1..100] |> Seq.iter (fun i -> 
    let toPrint =
        match i with
        | x when x % 3 = 0 && x % 5 = 0 -> "FizzBuzz"
        | x when x % 3 = 0 -> "Fizz"
        | x when x % 5 = 0 -> "Buzz"
        | x -> string x

    printf "%s," toPrint
    if i % 10 = 0
    then printfn ""
)