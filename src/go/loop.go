package main

import "fmt"

func main() {
	var value = 1

	for value < 10 {
		fmt.Println(value)
		value = value + 1
	}
}
