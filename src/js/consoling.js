const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdout.write("\u001b[?25l"); // hide cursor
process.stdout.write(`Window: ${process.stdout.columns}x${process.stdout.rows}\n`);
process.stdin.on('keypress', (str, key) => {
    process.stdout.write("\033[K"); // clear till end of line
    if (key.ctrl && key.name == "c") {
        process.exit();
    } else {
        process.stdout.write("You clicked: ");
        process.stdout.write("\x1b[46m");
        process.stdout.write("\x1b[30m");
        if (key.ctrl) {
            process.stdout.write("Ctrl + ");
        }
        if (key.shift) {
            process.stdout.write("Shift + ");
        }
        if (key.meta) {
            process.stdout.write("Alt + ");
        }
        process.stdout.write(`${key.name}\n`);
        process.stdout.write("\x1b[40m");
        process.stdout.write("\x1b[37m");
        process.stdout.write("\033[1A"); // go up one line
    }
});