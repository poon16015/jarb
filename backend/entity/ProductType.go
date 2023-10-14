package entity

import "gorm.io/gorm"

type ProductType struct {
	gorm.Model
	
	Type string

	Products []Product `gorm:"foreignKey:ProductTypeID"`
}
