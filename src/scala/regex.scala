object Regex extends App {
    import scala.util.matching.Regex

    println("Is '^[0-9]+$' mathed by '123456'?")
    if ("123456".matches("^[0-9]+$")) 
        println("yes")
    else
        println("no")

    println("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'")

    
}