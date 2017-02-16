package main

import "fmt"

func main() {
	setOfItems := []int{1, 2, 3}

	for _, item := range setOfItems {
		fmt.Println(item)
	}
}
