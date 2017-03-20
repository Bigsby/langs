[1..100] |> Seq.iter (fun i -> 
    let toPrint =
        match i with
        |
    if i % 3 = 0 && i % 5 = 0
    then printf "FizzBuzz"
    elif i % 3 = 0
    then printf "Fizz"
    elif i % 5 = 0
    then printf "Buzz"
    else printf "%d" i

    printf ","
    if i % 10 = 0
    then printfn ""
)