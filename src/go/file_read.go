package main

import (
	"bufio"
	"fmt"
	"io/ioutil"
	"os"
)

func main() {
	contentFileStream, _ := ioutil.ReadFile("../files/content.txt")
	fmt.Println(string(contentFileStream))

	multilineFileStream, _ := os.Open("../files/multipleLines.txt")
	scanner := bufio.NewScanner(multilineFileStream)
	scanner.Split(bufio.ScanLines)

	for scanner.Scan() {
		fmt.Println("- " + scanner.Text())
	}
}