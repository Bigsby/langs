package main

import "os"
import "fmt"

func main() {
	if len(os.Args) == 1 {
		fmt.Println("No parameters")
	} else if len(os.Args) == 2 {
		fmt.Println("Parameter is " + os.Args[1])
	} else {
		fmt.Println("Too many parameters")
	}
}