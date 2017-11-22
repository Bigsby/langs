object ConsoleInput extends App {
    println("What say you?")
    var userInput = scala.io.StdIn.readLine()
    println("You said: " + userInput)
}