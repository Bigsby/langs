function MontyPython(firstName, lastName){
    var me = this;
    me.FirstName = firstName;
    me.LastName = lastName;
    
    me.fullName = function(){
        return `${me.FirstName} ${me.LastName}`;
    };
}

var montyPython = new MontyPython("John", "Cleese");
console.log(`Monty Python is ${montyPython.fullName()}.`);

montyPython.FirstName = "Eric";
montyPython.LastName = "Idle";
console.log(`Now, Monty Python is ${montyPython.fullName()}.`);