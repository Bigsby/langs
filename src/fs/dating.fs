open System

let getAgeInYears (birthday:DateTime) =
    let today = DateTime.Today
    today.Year - birthday.Year - if today.DayOfYear < birthday.DayOfYear then 1 else 0

let birthday = new DateTime(1939, 10, 27)
let age = getAgeInYears birthday
printfn "John Cleese was born in %s and is %d years old." (birthday.ToString "yyyy-MM-dd") age

let parsedDate = DateTime.Parse "1975-11-10T01:25:00"
printf "Parsed date is %s" (parsedDate.ToString "s")