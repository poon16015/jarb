package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
	"net/http"
)
// GET /members/:id
func GetMember(c *gin.Context) {
	var member entity.Member
	id := c.Param("id")

	// Retrieve member by ID
	err := entity.DB().First(&member, id).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": member})
}
