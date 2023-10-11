package entity

import "gorm.io/gorm"


type Account struct {
    gorm.Model
    Email    string `gorm:"uniqueIndex"`
    Password string
	
	// One-to-One relationship
    Member   Member `gorm:"foreignKey:AccountID"` 
}
