import * as process from "process";

let value = true;
if (value) {
    process.stdout.write("Got true\n");
} else {
    process.stdout.write("Got else\n");
}

value = false;
if (value)
    process.stdout.write("Got true\n");
else
    process.stdout.write("Got else\n");

let result = 3;
if (result == 1)
    process.stdout.write("Got true\n");
else if (result == 2)
    process.stdout.write("Got else\n");
else
    process.stdout.write("Got if else\n");