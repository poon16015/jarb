package entity

import (
  "gorm.io/driver/sqlite"
  "gorm.io/gorm"
)

var db *gorm.DB

func DB() *gorm.DB {
  return db
}

func SetupDatabase() {
  database, err := gorm.Open(sqlite.Open("Jarb.db"), &gorm.Config{})
  if err != nil {
    panic("Failed to connect Jarb database")
  }

  database.AutoMigrate(
    &ProductType{},
    &Account{},
    &Member{},
    &Address{},
    &Product{},
    &Browse{},
    &CustomPC{},
    &History{},
    &Cart{},
  )
  db = database

  MockupProduct()
}