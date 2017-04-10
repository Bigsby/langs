import * as process from "process";

process.stdout.write("true and false is " + (true && false) + "\n");
process.stdout.write("true or false is " + (true || false) + "\n");
process.stdout.write("true xor false is " + (true != false) + "\n");
process.stdout.write("not true is " + !true + "\n");