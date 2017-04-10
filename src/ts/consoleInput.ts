import * as process from "process";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do say you?\n", userInput => {
    rl.close();
    process.stdout.write(`You said: ${userInput}`);
});