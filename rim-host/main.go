package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"
)

//go:embed static
var staticFiles embed.FS

func main() {
	var staticFS = fs.FS(staticFiles)
	htmlContent, err := fs.Sub(staticFS, "static")
	if err != nil {
		log.Fatal(err)
	}
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(htmlContent)

	http.Handle("/", http.FileServer(http.FS(htmlContent)))
	
	err = http.ListenAndServe(":5174", nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("rim-host")
}