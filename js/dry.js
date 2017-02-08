function DoStuff() {
	console.log("Doing stuff!");
}

DoStuff();
DoStuff();

function DoStuffWithThis(value)
{
	console.log("Doing stuff with " + value);
}

DoStuffWithThis("This");
DoStuffWithThis("That");