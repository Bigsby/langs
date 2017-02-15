package main

import "fmt"

func main() {
	var value = true
	if value {
		fmt.Println("Got true")
	} else {
		fmt.Println("Got else")
	}

	value = false
	if value {
		fmt.Println("Got true")
	} else {
		fmt.Println("Got else")
	}

	var result = 3
	if result == 1 {
		fmt.Println("Got true")
	} else if result == 2 {
		fmt.Println("Got else")
	} else {
		fmt.Println("Got if else")
	}
}
