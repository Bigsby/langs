public class classes {

    private static class MontyPython{
        private String _firstName;
        private String _lastName;
        public MontyPython(String firstName, String lastName){
            _firstName = firstName;
            _lastName = lastName;
        }

        public String FullName(){
            return _firstName + " " + _lastName;
        }

        public void set_FirstName(String firstName){
            _firstName = firstName;
        }

        public void set_LastName(String lastName){
            _lastName = lastName;
        }
    }
    public static void main(String[] args) {
        MontyPython montyPython = new MontyPython("John", "Cleese");
        System.out.println(String.format("Monty Python is %s.", montyPython.FullName()));

        montyPython.set_FirstName("Eric");
        montyPython.set_LastName("Idle");
        System.out.println(String.format("Now, Monty Python is %s.", montyPython.FullName()));
    }

}