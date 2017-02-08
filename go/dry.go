package main

import "fmt"

func DoStuff() {
	fmt.Println("Doing stuff!")
}

func DoSum(a int, b int) int {
	return (a + b)
}

func main() {
	DoStuff()
	fmt.Printf("2 + 1 = %v", DoSum(2, 1))
}