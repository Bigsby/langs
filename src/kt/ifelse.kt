fun main(args: Array<String>) {
    var value = true;
    if (value) {
        println("Got true")
    } else {
        println("Got else")
    }

    value = false
    if (value)
        println("Got true")
    else
        println("Got else")

    var result = 3
    if (result == 1)
        print("Got true")
    else if (result == 2)
        print("Got else")
    else
        print("Got if else")
}