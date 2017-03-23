require "date"

def GetAgeInYears(birthday)
    today = DateTime.now
    return today.year - birthday.year - (today.yday < birthday.yday ? 1 : 0)
end

birthday = Date.new(1939, 10, 27)
age = GetAgeInYears(birthday)
puts "John Cleese was born in #{birthday.strftime("%F")} and is #{age} years old."

parsedDate = DateTime.parse("1975-11-10T01:25:00")
puts "Parsed date is #{parsedDate.strftime("%FT%T")}"