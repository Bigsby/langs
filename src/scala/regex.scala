object Regex extends App {
    import scala.util.matching.Regex

    println("Is '^[0-9]+$' mathed by '123456'?")
    if ("123456".matches("^[0-9]+$")) 
        println("yes")
    else
        println("no")

    println("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'")

    val regex = """^([a-z]+)\-(\d+)$""".r

    val matchOption = regex.findFirstMatchIn("abcdef-12345")

    matchOption match {
        case Some(matchData) => {
            println("Found " + matchData.subgroups.size + " groups.")

            for ((group, index) <- matchData.subgroups.zipWithIndex) {
                println(s"[$index] = $group")
            }
        }
        case None => {}
    }
    
    
}