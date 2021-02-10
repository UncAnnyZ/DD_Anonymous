package main

import (
	"background/global"
	"background/initialize"
	"background/router"
	"fmt"
)

func main() {
	r := router.SetupRouter()
	global.GVA_DB = initialize.Gorm()
	if err := r.Run(); err != nil {
		fmt.Printf("startup service failed, err:%v\n\n", err)
	}

	//r := router.SetupRouter()
	//if err := r.Run(); err != nil {
	//	fmt.Printf("startup service failed, err:%v\n\n", err)
	//}
}