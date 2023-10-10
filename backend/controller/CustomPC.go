package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)



func GetProductCustom(c *gin.Context) {
	var Products  []entity.Product
	ProductTypeID := c.Param("TypeID")
	
	if err :=entity.DB().Raw("SELECT * FROM Products WHERE TypeID = ?",ProductTypeID).Scan(&Products).Error; err != nil{

	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	return
}
	// ส่งข้อความคืนว่าสร้างผู้ใช้เรียบร้อย
	c.JSON(http.StatusOK, gin.H{"message": Products})
	
}
