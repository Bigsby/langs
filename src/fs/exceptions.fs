open System

let DoStuff inError =
    if inError
    then raise (Exception("An error occured!"))

    printfn "Doing stuff!"

try
    DoStuff false
    DoStuff true
    DoStuff false
with
    | _ as ex -> printfn "ERROR: %s" ex.Message