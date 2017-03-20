package main

import "fmt"

type MontyPython struct {
	FirstName 	string
	LastName 	string
}

func (montyPython *MontyPython) FullName() string {
	return montyPython.FirstName + " " + montyPython.LastName
}

func main() {
	montyPython := MontyPython{"John", "Cleese"}
	fmt.Println("Monty Python is " + montyPython.FullName() + ".")
	
	montyPython.FirstName = "Eric"
	montyPython.LastName = "Idle"
	fmt.Println("Now, Monty Python is " + montyPython.FullName() + ".")
}