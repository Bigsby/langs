package main

import (
	"fmt"
	"time"
)

func getAgeInYears(birthday time.Time) int {
	today := time.Now()
	result := today.Year() - birthday.Year()
	if today.YearDay() < birthday.YearDay(){
		result--
	}
	return result
}

func main(){
	birthday := time.Date(1939, time.October, 27, 0, 0, 0, 0, time.UTC)
	age := getAgeInYears(birthday)
	fmt.Printf("John Cleese was born in %s and is %d years old.\n", birthday.Format(time.RFC3339)[:10], age)

	parsedDate, _ := time.Parse("2006-01-02T15:04:05", "1975-11-10T01:25:00");
	fmt.Printf("Parsed date is %s", parsedDate.Format(time.RFC3339)[:19])
}