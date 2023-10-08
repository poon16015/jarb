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
	Account   Account `gorm:"foreignKey:AccountID"`

	Addresses []Address `gorm:"foreignKey:MemberID"`
	Histories []History `gorm:"foreignKey:MemberID"`
	Carts     []Cart    `gorm:"foreignKey:MemberID"`
	Payments  []Payment `gorm:"foreignKey:MemberID"`

}
