package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)
func Login(c *gin.Context) {
	var request entity.Account
	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	// check email and password
	if isValidUser(request.Email, request.Password) {
		c.JSON(http.StatusOK, gin.H{"status": true, "message": "Login successful"})
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"status": false, "message": "Invalid email or password"})
	}
}

func isValidUser(email, password string) bool {
	
	return false
}