package main

import (
	"fmt"
	"log"
	"time"
)

func main() {
	start := time.Now()

	fmt.Println(fibo(40))

	elapsed := time.Since(start)
	log.Printf("Binomial took %s", elapsed)
}

func fibo(i int) int {
	if i <= 1 {
		return i
	}
	return fibo(i-2) + fibo(i-1)
}
