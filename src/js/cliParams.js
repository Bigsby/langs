"use strict";

// first parameter is node.exe path and second the cliParams.js path
if (process.argv.length == 2) 
{
    console.log("No parameters.");
} else if (process.argv.length == 3) {
    console.log("First parameter is " + process.argv[2]);
} else {
    console.log("Too many parameters");
}