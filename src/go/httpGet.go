package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	resp, _ := http.Get("http://langs.bigsbyspot.org/files/webcall.txt")
	respBytes, _ := ioutil.ReadAll(resp.Body)
	resp.Body.Close()
	data := string(respBytes)
	fmt.Println(data)
}