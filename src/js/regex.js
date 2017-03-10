console.log("Is '^[0-9]+$' mathed by '123456'?");
if (/^[0-9]+$/.test("123456")) {
    console.log("yes");
}
else {
    console.log("no");
}

console.log("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'");
var codeRegexp = /^([a-z]+)\-(\d+)$/;
var matches = codeRegexp.exec("abcdef-12345");
console.log(`Found ${matches.length} groups.`);

for (var groupIndex = 0; groupIndex < matches.length; groupIndex++){
    console.log(`[${groupIndex}] = ${matches[groupIndex]}`);
}