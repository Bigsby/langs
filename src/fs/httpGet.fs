open System.Net
open System
open System.IO

let req = WebRequest.Create(Uri("http://langs.bigsbyspot.org/files/webcall.txt")) 
let resp = req.GetResponse() 
let stream = resp.GetResponseStream() 
let reader = new IO.StreamReader(stream)
printfn "%s" (reader.ReadToEnd())
