package main

import (
    "fmt"
	"os"
	"io/ioutil"
)

func main() {
	var folders []os.FileInfo
	var files []os.FileInfo

	childItems, _ := ioutil.ReadDir("../files")
	
	for _, childItem := range childItems {
		if childItem.IsDir(){
			folders = append(folders, childItem)
		}else{
			files = append(files, childItem)
		}
	}

	for _, folder := range folders {
		fmt.Println("/" + folder.Name())
	}

	for _, file := range files {
		fmt.Printf("%s,%dB\n", file.Name(), file.Size())
	}
}