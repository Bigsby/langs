import * as process from "process";

function DoStuff() {
	process.stdout.write("Doing stuff!\n");
}

DoStuff();

function DoSum(a: number, b: number) {
	return a + b;
}

process.stdout.write("2 + 1 = " + DoSum(2, 1));