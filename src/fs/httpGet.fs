open System.Net
open System
open System.IO

let request = WebRequest.Create(Uri("http://langs.bigsbyspot.org/files/webcall.txt")) 
let response = request.GetResponse() 
let responseStream = response.GetResponseStream() 
let streamReader = new StreamReader(responseStream)

printfn "%s" (streamReader.ReadToEnd())
