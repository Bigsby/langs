package main

import "fmt"
import "errors"

func DoStuff(inError bool) error {
	if inError {
		return errors.New("An error occured!")
	}
	fmt.Println("Doing stuff!")
	return nil
}

func main() {
	err := DoStuff(false)
	if err == nil {
		err := DoStuff(true)
		if err == nil {
			DoStuff(false)
		} else {
			fmt.Printf("ERROR: %s", err.Error())
		}
	} else {
		fmt.Printf("ERROR: %s", err.Error())
	}
}