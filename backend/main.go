package main

import (
	"github.com/poon16015/jarb/entity"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/controller"
)

func main() {

	entity.SetupDatabase()
	r := gin.Default()
	r.Use(CORSMiddleware())
	
	//register
	r.POST("/register", controller.Register)
<<<<<<< HEAD
	//member1
	r.POST("/member1", controller.Member1)
	//member2
	r.PUT("/member2", controller.Member1)

=======
	//login
	r.POST("/login", controller.Login)
	//cart
	r.GET("/cart/:id", controller.GetCart)
	r.DELETE("/cart/:id", controller.DeleteCart)
>>>>>>> 8135de6c4308cc9636b463d26ef12f642bcd77b8
	
	r.Run()
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT, DELETE, PATCH")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}