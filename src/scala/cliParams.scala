object IfElse extends App {
    
    if (args.length == 0)
        println("No parameters")
    else if (args.length == 1)
        println("Parameter is " + args(0))
    else
        println("Too many paramters")
}