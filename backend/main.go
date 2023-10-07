package main

import (
	"github.com/PyeThunpisit/Jarb/entity"
	"github.com/gin-gonic/gin"
)

const PORT = "8080"

func main() {

	entity.SetupDatabase()
	r := gin.Default()

	r.Run("localhost: " + PORT)
}