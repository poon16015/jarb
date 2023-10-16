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
<<<<<<< HEAD
	r.POST("/register", controller.Register)
	//member1
	
	r.GET("/members/:id", controller.GetMember)

	//member2
	r.PUT("/members/:id", controller.UpdatedMemberData)
	r.DELETE("/members/:id", controller.DeleteMember)

=======
	r.POST("/Register", controller.Register)
	
>>>>>>> c5bb060a87e09007a0aeabdd7b399165a549fa29

	//login
	r.POST("/Login", controller.Login)
	//cart
	r.GET("/GetCart/:id", controller.GetCart)
	r.DELETE("/DelCart/:id", controller.DeleteCart)
	
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