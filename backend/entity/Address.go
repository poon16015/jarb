package entity

import "gorm.io/gorm"

type Address struct {
  gorm.Model

  Name     string
  HouseNumber  string
  Province string
  District string
  SubDistrict string
  ZipCode  int
  Tel      int

  MemberID *uint
  Member Member `gorm:"foreignKey:MemberID"`

}