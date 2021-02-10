package service

import (
	"background/global"
	"background/model"
	"background/model/request"
)

// @title    CreateNotePad
// @description   create a NotePad
// @param     notePad               model.NotePad
// @auth                     （2020/04/05  20:22）
// @return    err             error

func CreateNotePad(notePad model.NotePad) (err error) {
	err = global.GVA_DB.Create(&notePad).Error
	return err
}

// @title    DeleteNotePad
// @description   delete a NotePad
// @auth                     （2020/04/05  20:22）
// @param     notePad               model.NotePad
// @return                    error

func DeleteNotePad(notePad model.NotePad) (err error) {
	err = global.GVA_DB.Delete(notePad).Error
	return err
}

// @title    DeleteNotePadByIds
// @description   delete NotePads
// @auth                     （2020/04/05  20:22）
// @param     notePad               model.NotePad
// @return                    error

func DeleteNotePadByIds(ids request.IdsReq) (err error) {
	err = global.GVA_DB.Delete(&[]model.NotePad{},"id in (?)",ids.Ids).Error
	return err
}

// @title    UpdateNotePad
// @description   update a NotePad
// @param     notePad          *model.NotePad
// @auth                     （2020/04/05  20:22）
// @return                    error

func UpdateNotePad(notePad *model.NotePad) (err error) {
	err = global.GVA_DB.Save(notePad).Error
	return err
}

// @title    GetNotePad
// @description   get the info of a NotePad
// @auth                     （2020/04/05  20:22）
// @param     id              uint
// @return                    error
// @return    NotePad        NotePad

func GetNotePad(id uint) (err error, notePad model.NotePad) {
	err = global.GVA_DB.Where("id = ?", id).First(&notePad).Error
	return
}

// @title    GetNotePadInfoList
// @description   get NotePad list by pagination, 分页获取用户列表
// @auth                     （2020/04/05  20:22）
// @param     info            PageInfo
// @return                    error

func GetNotePadInfoList(info request.NotePadSearch) (err error, list interface{}, total int64) {
	limit := info.PageSize
	offset := info.PageSize * (info.Page - 1)
    // 创建db
	db := global.GVA_DB.Model(&model.NotePad{})
    var notePads []model.NotePad
    // 如果有条件搜索 下方会自动创建搜索语句
	err = db.Count(&total).Error
	err = db.Limit(limit).Offset(offset).Find(&notePads).Error
	return err, notePads, total
}