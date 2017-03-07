package main

import "fmt"
import "os"

func main(){
	fmt.Println("Exiting...")
	os.Exit(0)
	fmt.Println("This will not show!")
}