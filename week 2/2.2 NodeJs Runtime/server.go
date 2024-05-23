package main

import (
    "fmt"
    "net/http"
    "github.com/gorilla/mux"
)

func HelloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello world")
}

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/", HelloHandler).Methods("GET")

    http.ListenAndServe(":8080", r)
}

