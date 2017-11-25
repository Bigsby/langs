import * as process from "process";

if (process.argv.length == 2)
    process.stdout.write("No parameters");
else if (process.argv.length == 3)
    process.stdout.write("Parameter is " + process.argv[2]);
else
    process.stdout.write("Too many parameters");