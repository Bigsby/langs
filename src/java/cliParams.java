public class cliParams {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("No parameters");
        } else if (args.length == 1) {
            System.out.println("Parameter is " + args[0]);
        } else {
            System.out.println("Too many parameters");
        }
    }
}