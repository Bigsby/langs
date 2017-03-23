 function formattedDate(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
}

function getAgeInYears(birthday){
    return new Date(Date.now() - birthday.getTime()).getFullYear() - 1970;
}

var birthday = new Date(1939, 10, 27);
var age = getAgeInYears(birthday);
console.log(`John Cleese was born in ${formattedDate(birthday)} and is ${age} years old.`);

var date = new Date(Date.parse("1975-11-10T01:25:00"));
console.log(`Parsed date is ${date.toISOString().substr(0, 19)}`);