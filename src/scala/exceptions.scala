object Exceptions extends App {
    def doStuff(inError: Boolean) {
        if (inError)
            throw new Exception("An error occured!")
        
        println("Doing stuff!")
    }

    try {
        doStuff(false)
        doStuff(true)
        doStuff(false)

    } catch {
         case e: Exception => println("ERROR: " + e.getMessage())
    }
}