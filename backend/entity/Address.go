package entity

import "gorm.io/gorm"

type Address struct {
  gorm.Model

  Name     string
  Surname  string
  Province string
  District string
  Locality string
  Local    string
  ZipCode  int
  Tel      int

  MemberID *uint
  Member Member `gorm:"foreignKey:MemberID"`

}