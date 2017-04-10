import * as process from "process";

process.stdout.write("Joining " + "strings.\n");

process.stdout.write("First line\nSecond line\n");

let value = 3;
let result = `The value ${value} is interpolated`;
process.stdout.write(result);