open System.Text.RegularExpressions

printfn "Is '^\\d+$' mathed by '123456'?"
if Regex.Match("123456", "^[0-9]+$").Success
then printfn "yes"
else printfn "no"
