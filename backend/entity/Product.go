package entity

import "gorm.io/gorm"

type  Product struct {
gorm.Model

Imgp string
Price int
NameP string
Description  string
Incompatible string


ProductTypeID *uint
ProductType  ProductType  `gorm:"foreignKey:ProductTypeID"`

Browses  []Browse `gorm:"foreignKey:ProductID"`
CustomPCs []CustomPC `gorm:"foreignKey:ProductID"`
}