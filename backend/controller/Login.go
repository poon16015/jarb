package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
	"golang.org/x/crypto/bcrypt"

)

// LoginPayload login body
type Payload struct {
	Email string `json:"email"`
	Password string `json:"password"`
}

func Login(c *gin.Context) {
	var payload Payload
	var user entity.Account
	if err := c.ShouldBindJSON(&payload); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	// ค้นหา email ที่ผู้ใช้กรอกเข้ามา
	if err := entity.DB().Raw("SELECT * FROM accounts WHERE email = ?", payload.Email).Scan(&user).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// ตรวจสอบรหัสผ่าน
	err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(payload.Password))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "password is incorrect"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"status": true, "message": "Login successful", "user": user})
}

