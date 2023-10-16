package entity

import "gorm.io/gorm"


type Member struct {
	gorm.Model
	Name string `gorm:"uniqueIndex"`
	Gender string
	Dob    string
	Tel    string
	Email  string

	AccountID *uint 


	Addresses []Address `gorm:"foreignKey:MemberID"`
	Histories []History `gorm:"foreignKey:MemberID"`
	Carts     []Cart    `gorm:"foreignKey:MemberID"`

}
