
fun main(args: Array<String>) {
    println("Is '^[0-9]+$' mathed by '123456'?")
    if (Regex("^[0-9]+$").matches("123456")){
        println("yes")
    } else {
        println("no")
    }

    println("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'")
    val match = Regex("^([a-z]+)\\-(\\d+)$").find("abcdef-12345")
    match?.let{
        println("Found ${it.groups.orEmpty().count()} groups.")
        for ((groupIndex, group) in it.groups.orEmpty().withIndex()){
           println("[${groupIndex}] = ${group?.value}") 
        }
    }
}