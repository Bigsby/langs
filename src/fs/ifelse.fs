let mutable value = true

if value
then printfn "Got true"
else printfn "Got else"

value <- false

if value 
then printfn "Got true" 
else printfn "Got else"

let result = 3
if result = 1
then printfn "Got true"
elif result = 2
then printfn "Got else"
else printfn "Got if else"