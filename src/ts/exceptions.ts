import * as process from "process";

function DoStuff(inError: boolean) {
    if (inError)
        throw new Error("An error occured!\n");

    process.stdout.write("Doing stuff!\n");
}

try {
    DoStuff(false);
    DoStuff(true);
    DoStuff(false); // not reached
} catch (error) {
    process.stdout.write("ERROR: " + error.message);
}