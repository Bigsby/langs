object Dating extends App {
    import java.text.SimpleDateFormat
    import java.time._
    import java.time.format.DateTimeFormatter

    // var today = LocalDate.now
    // println(s"$today")

    def  getAgeInYears(birthday:LocalDate) :Int = {
        val today = LocalDate.now()
        val yearDiffernce = today.getYear() - birthday.getYear()
        if (today.getDayOfYear() < birthday.getDayOfYear())
            return yearDiffernce - 1
        return yearDiffernce
    }


    val birthday = LocalDate.of(1939, 10, 27)
    val age = getAgeInYears(birthday)
    val formattedBirthday = DateTimeFormatter.ofPattern("yyyy-MM-dd").format(birthday)
    println(s"John Cleese was born in $formattedBirthday and is $age years old.")

    val parsedDate = LocalDateTime.parse("1975-11-10T01:25:00", DateTimeFormatter.ISO_LOCAL_DATE_TIME)
    println("Parsed date is " + DateTimeFormatter.ISO_LOCAL_DATE_TIME.format(parsedDate))
}