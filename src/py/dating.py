import datetime

def getAgeInYears(birthday):
    today = datetime.date.today()
    return today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))

birthday = datetime.date(1939, 10, 27)
age = getAgeInYears(birthday)
print("John Clesse was born in ", birthday, "and is ", age, " years old.")

parsedDate = datetime.datetime.strptime("1975-11-10T01:25:00", "%Y-%m-%dT%H:%M:%S")
print("Parsed date is ", parsedDate.strftime('%Y-%m-%dT%H:%M:%S'))