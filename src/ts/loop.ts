import * as process from "process";

let value = 1;

while (value < 10) {
    process.stdout.write(value + "\n");
    value = value + 1;
}