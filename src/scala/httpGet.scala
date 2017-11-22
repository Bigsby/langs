object HttpGet extends App {
    import scala.io.Source

    println(Source.fromURL("http://langs.bigsbyspot.org/files/webcall.txt").mkString)
}