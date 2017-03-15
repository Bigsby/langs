import java.net.*;
import java.io.*;

public class httpGet {

    public static void main(String[] args) throws Exception {
        URL url = new URL("http://langs.bigsbyspot.org/files/webcall.txt");
        URLConnection connection = url.openConnection();
        InputStream inputStream = connection.getInputStream();
        InputStreamReader streamReader = new InputStreamReader(inputStream);
        BufferedReader bufferedReader = new BufferedReader(streamReader);

        String content = "";
        String contentLine;
        while ((contentLine = bufferedReader.readLine()) != null) {
            content += contentLine;
        }
        
        bufferedReader.close();

        System.out.println(content);
    }

}