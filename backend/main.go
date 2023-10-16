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
	//member1
	
	r.GET("/members/:id", controller.GetMember)

	//member2
	r.PUT("/members/:id", controller.UpdatedMemberData)
	r.DELETE("/members/:id", controller.DeleteMember)


	//login
	r.POST("/login", controller.Login)
	//cart
	r.GET("/cart/:id", controller.GetCart)
	r.DELETE("/cart/:id", controller.DeleteCart)
	
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