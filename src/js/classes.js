"use strict";
class MontyPython{
    constructor(firstName, lastName){
        this.FirstName = firstName;
        this.LastName = lastName;
    }

    fullName(){
        return `${this.FirstName} ${this.LastName}`;
    }
}

let montyPython = new MontyPython("John", "Cleese");
console.log(`Monty Python is ${montyPython.fullName()}.`);

montyPython.FirstName = "Eric";
montyPython.LastName = "Idle";
console.log(`Now, Monty Python is ${montyPython.fullName()}.`);