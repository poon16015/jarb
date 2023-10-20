package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)
// GET /product/:id
func GetProduct(c *gin.Context) {
	var Products  []entity.Product
	if err :=entity.DB().Raw("SELECT * FROM Product ").Scan(&Products).Error; err != nil{

	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	return
}
	
	c.JSON(http.StatusOK, gin.H{"data": Products})
	
}
	
	