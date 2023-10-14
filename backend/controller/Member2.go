package controller

import (
	"net/http"
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
)

// PUT /members/:id
func UpdatedMemberData(c *gin.Context) {
	id := c.Param("id")

	// Check if the member exists
	var member entity.Member
	if err := entity.DB().First(&member, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Member not found"})
		return
	}

	// Bind the updated data to the existing member
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Update the member
	if err := entity.DB().Save(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": member, "message": "Member updated successfully"})
}

// DELETE /member/:id
func DeleteMember(c *gin.Context) {
	id := c.Param("id")

	// Check if the member exists
	var member entity.Member
	if err := entity.DB().First(&member, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Member not found"})
		return
	}

	// Delete the member
	if err := entity.DB().Delete(&member).Error; err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Member deleted successfully"})
}