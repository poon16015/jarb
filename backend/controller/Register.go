package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
	
)

var users = []entity.Account{}

func Register(c *gin.Context) {
    var user entity.Account

    // ในที่นี้ให้ใช้ ShouldBindJSON เพื่อรับข้อมูล JSON จาก Request
    if err := c.ShouldBindJSON(&user); err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    // ตรวจสอบว่าอีเมล์ไม่ซ้ำกัน
    for _, existingUser := range users {
        if existingUser.Email == user.Email {
            c.JSON(http.StatusBadRequest, gin.H{"error": "Email is already registered"})
            return
        }
    }
    users = append(users, user)
	
    // ส่งข้อความคืนว่าสร้างผู้ใช้เรียบร้อย
    c.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}
