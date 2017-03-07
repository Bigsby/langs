public class consoleInput {

    public static void main(String[] args) {
        System.out.println("What say you?");
        String userInput = System.console().readLine();
        System.out.print("You said: " + userInput);
    }

}