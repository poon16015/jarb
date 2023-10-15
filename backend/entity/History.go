package entity

import (
  "time"

  "gorm.io/gorm"
)

type History struct {
  gorm.Model
  Time   time.Time
  Total  int
  Picitem int

  MemberID *uint
  Member Member `gorm:"foreignKey:MemberID"`
  CartID *uint
  Cart Cart `gorm:"foreignKey:CartID"`
}