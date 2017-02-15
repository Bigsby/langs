printfn "The string %s in interpolated" "string"
printfn "The boolean %b in interpolated" true
printfn "The integer %i in interpolated" 123
printfn "The float %f in interpolated" 12.3
printfn "The list %A in interpolated" [| "Joining "; "strings." |]
printfn "The object %O in interpolated" 12.3 // general pupose that calls ToString() of object