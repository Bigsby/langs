import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;

public class dating {

    public static int getAgeInYears(LocalDate birthday) {
        LocalDate today = LocalDate.now();
        return today.getYear() - birthday.getYear() - (today.getDayOfYear() < birthday.getDayOfYear() ? 1 : 0);
    }

    public static void main(String[] args) {
        LocalDate birthday = LocalDate.of(1939, 10, 27);
        int age = getAgeInYears(birthday);
        System.out.println(
                String.format("John Cleese was born in %s and is %d years old.", 
                DateTimeFormatter.ofPattern("yyyy-MM-dd").format(birthday), age));

        LocalDateTime parsedDate = LocalDateTime.parse("1975-11-10T01:25:00", DateTimeFormatter.ISO_LOCAL_DATE_TIME);
        System.out.print("Parsed date is " + DateTimeFormatter.ISO_LOCAL_DATE_TIME.format(parsedDate));
    }
}