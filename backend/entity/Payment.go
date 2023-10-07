package entity

import "gorm.io/gorm"

type Payment struct {
  gorm.Model
  Total  int
  State  int

  AddressID *uint
  Address Address `gorm:"foreignKey:AddressID"`

  CartID *uint
  Cart Cart `gorm:"foreignKey:CartID"`
  
  MemberID *uint
  Member Member `gorm:"foreignKey:MemberID"`
}