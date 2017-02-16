let setOfItems = [| 1; 2; 3 |]

setOfItems |> Array.iter (fun item -> printfn "%d" item)