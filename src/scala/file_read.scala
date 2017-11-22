object FileRead extends App {
    import scala.io.Source

    println(Source.fromFile("../files/content.txt").mkString)

    for (line <- Source.fromFile("../files/multipleLines.txt").getLines) {
        println(s"- $line")
    }
}