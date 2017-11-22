object Dry extends App {
   
   def doStuff() {
       println("Doing stuff!")
   }

   def doSum(a:Int, b: Int) :Int = {
       return a + b
   }

   doStuff()
   println(s"2 + 1 = ${doSum(2, 1)}")
}