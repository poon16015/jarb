package entity

import "gorm.io/gorm"

type CustomPC struct {
  gorm.Model

  ProductID *uint
  Products Product `gorm:"foreignKey:ProductID"`

  Carts []Cart `gorm:"foreignKey:CustomPCID"`
}