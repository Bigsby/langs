System.IO.File.ReadAllText "../files/content.txt" 
    |> printfn "%s"

System.IO.File.ReadAllLines "../files/multipleLines.txt" 
    |> Seq.iter (fun line -> printfn "- %s" line)