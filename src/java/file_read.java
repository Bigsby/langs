import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.charset.Charset;

public class file_read {

    public static void main(String[] args) {

        try {
            String fileContent = new String(
                Files.readAllBytes(
                    Paths.get("../files/content.txt")));
            System.out.println(fileContent);

            for(String line: Files.readAllLines(
                Paths.get("../files/multipleLines.txt"),
                Charset.forName("ISO-8859-1"))) 
            {
                System.out.println("- " + line);
            }

        } catch (IOException e) {

        }
    }

}