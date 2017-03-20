package main

import "fmt"

func main() {
	for i := 1; i <= 100; i++ {
		if (i % 3 == 0 && i % 5 == 0) {
            fmt.Print("Fizzbuzz")
        } else if (i % 3 == 0) {
            fmt.Print("Fizz")
        } else if (i % 5 == 0) {
            fmt.Print("Buzz")
        } else {
            fmt.Print(i)
        }
		
		if (i % 10 == 0){
			fmt.Println()
		}else{
            fmt.Print(",")
        }
	}
}