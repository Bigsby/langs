[<EntryPoint>]
let main(args) =
    if args.Length = 0
    then printfn "No parameters"
    elif args.Length = 1
    then printfn "Parameter is %s" args.[0] 
    else printfn "Too many parameters"

    0