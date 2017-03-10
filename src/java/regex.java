import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class regex {

    public static void main(String[] args) {
        System.out.println("Is '^[0-9]+$' mathed by '123456'?");
        if ("123456".matches("^[0-9]+$")) {
            System.out.println("yes");
        } else {
            System.out.println("no");
        }

        System.out.println("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'");
        Pattern codeRegexp = Pattern.compile("^([a-z]+)\\-(\\d+)$");
        Matcher matches = codeRegexp.matcher("abcdef-12345");
        System.out.println("Found " + matches.groupCount() + " groups.");
        matches.find();

        for (int groupIndex = 0; groupIndex <= matches.groupCount(); groupIndex++) {
            System.out.println(java.lang.String.format("[%d] %s", groupIndex, matches.group(groupIndex)));
        }
    }
}