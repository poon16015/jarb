package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)

func GetCart(c *gin.Context) {

    var cart entity.Cart
	id := c.Param("id") 
    if err := entity.DB().Raw("SELECT Picitem FROM carts WHERE id = ?", id).Scan(&cart).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Product not found"})
        return
    }

    // ดึงข้อมูล Product โดยใช้ picitem
    var product entity.Product
    if err := entity.DB().Where("id = ?", cart.Picitem).Scan(&product).Error; err != nil {
        c.JSON(http.StatusBadRequest, gin.H{"error": "Product not found"})
        return
    }

    // ส่งข้อมูล Product ไปยัง UI
    c.JSON(http.StatusOK, gin.H{"data": product})
}

// DeleteCart
func DeleteCart(c *gin.Context) {
    // ค้นหาและลบสินค้าออกจากตะกร้าของผู้ใช้
    id := c.Param("id")
	if tx := entity.DB().Exec("DELETE FROM cart WHERE id = ?", id); tx.RowsAffected == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "cart not found"})
		return
	}
	c.JSON(http.StatusOK, gin.H{"data": id})
}
