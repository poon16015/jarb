package entity

import "gorm.io/gorm"

type Cart struct {
  gorm.Model
  Picitem int
  Total int
  
  MemberID *uint
  Member Member `gorm:"foreignKey:MemberID"`
 
  BrowseID *uint
  Browse Browse `gorm:"foreignKey:BrowseID"`
 
  CustomPCID *uint
  CustomPC  CustomPC `gorm:"foreignKey:CustomPCID"`
}