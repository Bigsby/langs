const http = require("http");

http.get("http://langs.bigsbyspot.org/files/webcall.txt", (response) => {
    var data = "";
    response.on("data", (chunk) => data += chunk);
    response.on("end", () => {
        console.log(data);
    });
});