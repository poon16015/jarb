package entity

import (
  "time"

  "gorm.io/gorm"
)

type History struct {
  gorm.Model
  Hid    int
  Time   time.Time

  MemberID *uint
  Member Member `gorm:"foreignKey:MemberID"`
}