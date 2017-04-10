import * as process from "process";

function formattedDate(date: Date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
}

function getAgeInYears(birthday: Date){
    return new Date(Date.now() - birthday.getTime()).getFullYear() - 1970;
}

var birthday = new Date(1939, 10, 27);
var age = getAgeInYears(birthday);
process.stdout.write(`John Cleese was born in ${formattedDate(birthday)} and is ${age} years old.\n`);

var date = new Date(Date.parse("1975-11-10T01:25:00"));
process.stdout.write(`Parsed date is ${date.toISOString().substr(0, 19)}`);