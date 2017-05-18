fun doStuff(inError: Boolean) {
    if (inError)
        throw Exception("An error occured!")

    println("Doing stuff!")
}

fun main(args: Array<String>) {
    try {
        doStuff(false)
        doStuff(true)
        doStuff(false) // not reached
    } catch (e: Exception) {
        print("ERROR: ${e.message}")
    }
}