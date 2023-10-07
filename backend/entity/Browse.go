package entity

import "gorm.io/gorm"

type Browse struct {
  gorm.Model

  ProductID *uint
  Products Product `gorm:"foreignKey:ProductID"`

  Carts []Cart `gorm:"foreignKey:BrowseID"`
  
  
}