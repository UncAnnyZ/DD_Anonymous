package main

import (
	"background/routers"
	"fmt"
)

func main() {
	r := routers.SetupRouter()
	if err := r.Run(); err != nil {
		fmt.Printf("startup service failed, err:%v\n\n", err)
	}
}