package entity

import "gorm.io/gorm"


type Member struct {
	gorm.Model
	Name string 
	Gender string
	Dob    string
	Tel    string
	Email  string `gorm:"uniqueIndex"`

	AccountID *uint 


	Addresses []Address `gorm:"foreignKey:MemberID"`
	Histories []History `gorm:"foreignKey:MemberID"`
	Carts     []Cart    `gorm:"foreignKey:MemberID"`

}
