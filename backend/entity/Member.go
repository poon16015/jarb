package entity

import "gorm.io/gorm"


type Member struct {
	gorm.Model
	Username string `gorm:"uniqueIndex"`
	Password string
	Email    string `gorm:"uniqueIndex"`

	Addresses []Address `gorm:"foreignKey:MemberID"`
	Histories []History `gorm:"foreignKey:MemberID"`
	Carts     []Cart    `gorm:"foreignKey:MemberID"`
	Payments  []Payment `gorm:"foreignKey:MemberID"`
}
