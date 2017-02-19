public class file_read {

    public static void main(String[] args) {

        try {
            String fileContent = new String(
                java.nio.file.Files.readAllBytes(
                    java.nio.file.Paths.get("../files/content.txt")));
            System.out.println(fileContent);

            for(String line: java.nio.file.Files.readAllLines(
                java.nio.file.Paths.get("../files/multipleLines.txt"),
                java.nio.charset.Charset.forName("ISO-8859-1"))) 
            {
                System.out.println("- " + line);
            }

        } catch (java.io.IOException e) {

        }
    }

}