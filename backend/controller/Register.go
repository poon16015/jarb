package controller

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
    "golang.org/x/crypto/bcrypt"

	
)


func Register(c *gin.Context) {
    var user entity.Account
    var email = []entity.Account{}

    // ในที่นี้ให้ใช้ ShouldBindJSON เพื่อรับข้อมูล JSON จาก Request
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Can't recieve "})
        return
    }
    // ตรวจสอบว่าอีเมล์ไม่ซ้ำกัน
    for _, existingUser := range email {
        if existingUser.Email == user.Email {
            c.JSON(http.StatusBadRequest, gin.H{"error": "Email is already registered"})
            return
        }
    }
    password, _ := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
    u := entity.Account{
		Email: user.Email, 
		Password: string(password),
	}

	// บันทึก
	if err := entity.DB().Create(&u).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Email is already registered"})
		return
	}
    // ส่งข้อความคืนว่าสร้างผู้ใช้เรียบร้อย
    c.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}
