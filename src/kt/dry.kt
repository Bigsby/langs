fun doStuff() {
    println("Doing stuff!")
}

fun doSum(a: Int, b: Int) :Int {
	return a + b
}

fun main(args: Array<String>) {
    doStuff()
    print("2 + 1 = ${doSum(2, 1)}")
}