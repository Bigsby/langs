const readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do say you?\n", function (userInput) {
    rl.close();
    console.log(`You said: ${userInput}`);
});