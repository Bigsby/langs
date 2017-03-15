const http = require("http");

http.get("http://langs.bigsbyspot.org/files/webcall.txt", (response) => {
    var content = "";
    response.on("data", (data) => content += data);
    
    response.on("end", () => {
        console.log(content);
    });
});