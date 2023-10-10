package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)

// LoginPayload login body
type LoginPayload struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Login(c *gin.Context) {
	var payload LoginPayload
	var user entity.Account
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา user ด้วย email ที่ผู้ใช้กรอกเข้ามา
	if err := entity.DB().Raw("SELECT * FROM accounts WHERE email = ? AND password = ?", payload.Username,payload.Password).Scan(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"status": false, "message": "Invalid email or password"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": true, "message": "Login successful", "user": user})
}

