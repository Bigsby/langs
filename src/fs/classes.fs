type MontyPython(firstName, lastName) =
    let mutable firstName = firstName
    let mutable lastName = lastName

    member this.FirstName
        with get () = firstName
        and set (value) = firstName <- value

    member this.LastName
        with get () = lastName
        and set (value) = lastName <- value

    member this.FullName =
        sprintf "%s %s" this.FirstName this.LastName

let montyPython = new MontyPython("John", "Cleese")
printfn "Monty Python is %s." montyPython.FullName

montyPython.FirstName <- "Eric"
montyPython.LastName <- "Idle"
printfn "Now, Monty Python is %s." montyPython.FullName