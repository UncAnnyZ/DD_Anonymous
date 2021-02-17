// 自动生成模板NotePad
package model

import (
      "github.com/jinzhu/gorm"
      "time"
)

// 如果含有time.Time 请自行import time包
type NotePad struct {
      gorm.Model
      Uid        string    `json:"uid" form:"uid" gorm:"column:uid;comment:'';type:varchar(255)"`
      AuthorUid  string    `json:"author_uid" form:"author_uid" gorm:"column:author_uid;comment:'';type:varchar(255)"`
      Title      string    `json:"title" form:"title" gorm:"column:title;comment:'';type:varchar(255)"`
      Content    string    `json:"content" form:"content" gorm:"column:content;comment:'';type:varchar(255)"`
      CreateDate time.Time `json:"create_date" form:"create_date" gorm:"column:create_date;comment:'';type:datetime"`
      ModifyDate time.Time `json:"modify_date" form:"modify_date" gorm:"column:modify_date;comment:'';type:datetime"`
      LikeNumber int       `json:"like_number" form:"like_number" gorm:"column:like_number;comment:'';type:int(255)"`
}


func (NotePad) TableName() string {
  return "notepad"
}
