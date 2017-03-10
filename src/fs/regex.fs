open System.Text.RegularExpressions

printfn "Is '^[0-9]+$' mathed by '123456'?"
if Regex.Match("123456", "^[0-9]+$").Success
then printfn "yes"
else printfn "no"

printfn "Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'"
let codeRegexp = Regex "^([a-z]+)\\-(\\d+)$"
let matches = codeRegexp.Match("abcdef-12345")
printfn "Found %i groups." matches.Groups.Length