package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)

func GetCart(c *gin.Context) {
	// ดึงข้อมูลผู้ใช้จาก Token
    user, exists := c.Get("user")
    if !exists {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
        return
    }
    currentUser := user.(*entity.Account)

	var cartItems []entity.Cart
    productID := c.Param("id")
    
    // ค้นหาตะกร้าสินค้าของผู้ใช้ด้วย ID ของสินค้าและ ID ผู้ใช้
    if err := entity.DB().Where("member_id = ? AND browse_id = ?", currentUser.ID, productID).Find(&cartItems).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
}

// DeleteCart
func DeleteCart(c *gin.Context) {
	user, exists := c.Get("user")
    if !exists {
        c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
        return
    }
    
    // แปลงผู้ใช้เป็น User
    currentUser := user.(*entity.Account)
    
    productID := c.Param("id")
    
    // ค้นหาและลบสินค้าออกจากตะกร้าของผู้ใช้
    if err := entity.DB().Where("member_id = ? AND browse_id = ?", currentUser.ID, productID).Delete(&entity.Cart{}).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
        return
    }
    
    c.JSON(http.StatusOK, gin.H{"message": "Item deleted from cart"})
}
