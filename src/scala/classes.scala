object Classes extends App {
    class MontyPython(private var _firstName: String, private var _lastName:String) {
        def set_firstName(firstName: String) = {
            _firstName = firstName
        }

        def set_lastName(lastName: String) = {
            _lastName = lastName
        }

        def fullName() :String = {
            return _firstName + " " + _lastName
        }
    }



    val montyPython = new MontyPython("John", "Cleese")
    println(s"Monty Phython is ${montyPython.fullName}")

    montyPython.set_firstName("Eric")
    montyPython.set_lastName("Idle")
    println(s"Now, Monty Python is ${montyPython.fullName}")
}