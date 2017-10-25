import java.io.File;
import java.util.List;
import java.util.ArrayList;

public class file_system {

    public static void main(String[] args) {

        File file = new File("../files");

        List<File> files = new ArrayList<File>();
        List<File> folders = new ArrayList<File>();

        for (File childItem : file.listFiles()) {
            if (childItem.isFile())
                files.add(childItem);

            if (childItem.isDirectory())
                folders.add(childItem);
        }

        for (File folderItem : folders) {
            System.out.println("/" + folderItem.getName());
        }

        for (File fileItem : files) {
            System.out.println(fileItem.getName() + "," + fileItem.length() + "B");
        }
    }

}