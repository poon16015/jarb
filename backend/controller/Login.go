package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)
func Login(c *gin.Context) {
	var login entity.Account
	if err := c.BindJSON(&login); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	// check email and password
	if isValidUser(login.Email, login.Password) {
		c.JSON(http.StatusOK, gin.H{"status": true, "message": "Login successful"})
	} else {
		c.JSON(http.StatusUnauthorized, gin.H{"status": false, "message": "Invalid email or password"})
	}
}

func isValidUser(email, password string) bool {
	
	var user entity.Account
	result := entity.DB().Where("email = ? AND password = ?", email, password).First(&user)
	if result.Error != nil || result.RowsAffected == 0 {
		return false
	}
	return true
}