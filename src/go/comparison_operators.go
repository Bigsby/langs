package main

import "fmt"

func main() {
	var result = 1 == 2
	fmt.Printf("1 equals 2 is %v\n", result)
	
	result = 1 != 2
	fmt.Printf("1 not equals 2  is %v\n", result)
	
	result = 1 > 2
	fmt.Printf("1 larger than 2 is %v\n", result)
	
	result = 1 >= 2
	fmt.Printf("1 larger than or equals 2 is %v\n", result)
	
	result = 1 < 2
	fmt.Printf("1 less than 2 is %v\n", result)
	
	result = 1 <= 2
	fmt.Printf("1 less than or equals 2 is %v", result)
}