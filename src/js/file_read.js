const fs = require("fs");

console.log(fs.readFileSync("./../files/content.txt", "utf8"));

const readLine = require("readline");
const readStream = readLine.createInterface({
    input: fs.createReadStream("./../files/multipleLines.txt")
});

readStream.on("line", function (line) {
    console.log(`- ${line}`);
});