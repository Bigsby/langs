import * as process from "process";

class MontyPython{
    constructor(public FirstName:string, public LastName:string){
    }

    fullName(){
        return `${this.FirstName} ${this.LastName}`;
    }
}

let montyPython = new MontyPython("John", "Cleese");
process.stdout.write(`Monty Python is ${montyPython.fullName()}.\n`);

montyPython.FirstName = "Eric";
montyPython.LastName = "Idle";
process.stdout.write(`Now, Monty Python is ${montyPython.fullName()}.`);