object FizzBuzz extends App {
    (1 until 100).map(i => (i % 3, i % 5) match {
        case (0, 0) => "FizzBuzz"
        case (0, _) => "Fizz"
        case (_, 0) => "Buzz"
        case _ => i}).zipWithIndex.foreach {
            case (i, index) => {
                print(s"$i,")
                if ((index + 1) % 10 == 0)
                    println
            }
        }
}