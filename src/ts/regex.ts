import * as process from "process";

process.stdout.write("Is '^[0-9]+$' mathed by '123456'?\n");
if (/^[0-9]+$/.test("123456")) {
    process.stdout.write("yes\n");
}
else {
    process.stdout.write("no\n");
}

process.stdout.write("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'\n");
const codeRegexp = /^([a-z]+)\-(\d+)$/;
let matches = codeRegexp.exec("abcdef-12345");
process.stdout.write(`Found ${matches.length} groups.\n`);

for (var groupIndex = 0; groupIndex < matches.length; groupIndex++){
    process.stdout.write(`[${groupIndex}] = ${matches[groupIndex]}\n`);
}