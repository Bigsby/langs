open System.IO

let directoryInfo = new DirectoryInfo("../files")

directoryInfo.GetDirectories() 
    |> Array.iter (fun folder -> printfn "/%s" folder.Name)

directoryInfo.GetFiles() 
    |> Array.iter (fun file -> printfn "%s,%dB" file.Name file.Length)