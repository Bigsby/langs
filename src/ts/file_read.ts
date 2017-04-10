import * as fs from "fs";
import * as process from "process";

process.stdout.write(fs.readFileSync("./../files/content.txt", "utf8") + "\n");

const readLine = require("readline");
const readStream = readLine.createInterface({
    input: fs.createReadStream("./../files/multipleLines.txt")
});

readStream.on("line", (line:string) => {
    process.stdout.write(`- ${line}\n`);
});