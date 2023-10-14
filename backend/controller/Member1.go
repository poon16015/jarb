package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/poon16015/jarb/entity"
	"net/http"
)

// POST /members
func CreateMember(c *gin.Context) {
	var member entity.Member

	// Bind the JSON request to the member struct
	if err := c.ShouldBindJSON(&member); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Create a new member
	err := entity.DB().Create(&member).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": member})
}

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

// GET /members
func ListMembers(c *gin.Context) {
	var members []entity.Member

	// Retrieve all members
	err := entity.DB().Find(&members).Error
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": members})
}


