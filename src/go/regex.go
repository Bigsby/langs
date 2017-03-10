package main

import "fmt"
import "regexp"

func main() {
	fmt.Println("Is '^[0-9]+$' mathed by '123456'?")
	matched, err := regexp.MatchString("^[0-9]+$", "1234567")
	if matched && err == nil {
		fmt.Println("yes")
	} else {
		fmt.Println("no")
	}

	fmt.Println("Groups of '^([a-z]+)\\-(\\d+)$' found in 'abcdef-12345'")
	codeRegexp, _ := regexp.Compile("^([a-z]+)\\-(\\d+)$")
	matches := codeRegexp.FindStringSubmatch("abcdef-12345")
	fmt.Printf("Found %v groups.\n", len(matches))
	for groupIndex, match := range matches{
		fmt.Printf("[%d] = %s\n", groupIndex, match)
	}
}
