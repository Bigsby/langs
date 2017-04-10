import * as http from "http";
import * as process from "process";

http.get("http://langs.bigsbyspot.org/files/webcall.txt", (response) => {
    var content = "";
    response.on("data", (data) => content += data);
    
    response.on("end", () => {
        process.stdout.write(content);
    });
});