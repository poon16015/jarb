package main

import (
	"github.com/poon16015/jarb/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {

	entity.SetupDatabase()
	r := gin.Default()

	r.Run("localhost: " + PORT)
}