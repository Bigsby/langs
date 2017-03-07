package main

import (
	"fmt"
	"bufio"
	"os"
)

func main(){
	fmt.Println("What say you?")
	reader := bufio.NewReader(os.Stdin)
	userInput, _, _ := reader.ReadLine()
	fmt.Printf("You said: %s", userInput)
}