public class exceptions {

    private static void DoStuff(boolean inError) throws Exception {
        if (inError) {
            throw new Exception("An error occured!");
        }

        System.out.println("Doing stuff!");
    }

    public static void main(String[] args) {
        try {
            DoStuff(false);
            DoStuff(true);
            DoStuff(false);
        } catch (Exception ex) {
            System.out.println("ERRO: " + ex.getMessage());
        }
    }

}