package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	response, _ := http.Get("http://langs.bigsbyspot.org/files/webcall.txt")
	responseBytes, _ := ioutil.ReadAll(response.Body)
	response.Body.Close()
	content := string(responseBytes)
	
	fmt.Println(content)
}