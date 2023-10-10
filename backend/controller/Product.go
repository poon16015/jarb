package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)

// GET /product/:id

func GetProduct(c *gin.Context) {

	var product entity.Product
	
	id := c.Param("id")
	
	if err := entity.DB().Raw("SELECT * FROM product WHERE id = ?", id).Scan(&product).Error; err != nil {
	
	c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	
	return
	
	}
	
	c.JSON(http.StatusOK, gin.H{"data": product})
	
	}
	// Get Products
	func ListProduct(c *gin.Context){
		var products []entity.Product
		if err := entity.DB().Raw("SELECT *FROM Product").Scan(&products).Error; err != nil{
			c.JSON(http.StatusBadRequest, gin.H{"error":err.Error()})
			return
		}
		c.JSON(http.StatusOK, gin.H{"data":products})
	}
	