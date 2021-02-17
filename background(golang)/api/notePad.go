package api

import (
	"background/model"
	"background/model/request"
	"background/model/response"
	resp "background/model/response"
	"background/service"
	"fmt"
	"github.com/gin-gonic/gin"
	"time"
)

// @Tags NotePad
// @Summary 创建NotePad
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NotePad true "创建NotePad"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /notePad/createNotePad [post]
func CreateNotePad(c *gin.Context) {
	var notePad model.NotePad
	_ = c.ShouldBindJSON(&notePad)
	notePad.CreateDate = time.Now()
	notePad.ModifyDate = time.Now()
	err := service.CreateNotePad(notePad)
	if err != nil {
		response.FailWithMessage(fmt.Sprintf("创建失败，%v", err), c)
	} else {
		response.OkWithMessage("创建成功", c)
	}
}

// @Tags NotePad
// @Summary 删除NotePad
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NotePad true "删除NotePad"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /notePad/deleteNotePad [delete]
func DeleteNotePad(c *gin.Context) {
	var notePad model.NotePad
	_ = c.ShouldBindJSON(&notePad)
	err := service.DeleteNotePad(notePad)
	if err != nil {
		response.FailWithMessage(fmt.Sprintf("删除失败，%v", err), c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags NotePad
// @Summary 批量删除NotePad
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除NotePad"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /notePad/deleteNotePadByIds [delete]
func DeleteNotePadByIds(c *gin.Context) {
	var IDS request.IdsReq
    _ = c.ShouldBindJSON(&IDS)
	err := service.DeleteNotePadByIds(IDS)
	if err != nil {
		response.FailWithMessage(fmt.Sprintf("删除失败，%v", err), c)
	} else {
		response.OkWithMessage("删除成功", c)
	}
}

// @Tags NotePad
// @Summary 更新NotePad
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NotePad true "更新NotePad"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /notePad/updateNotePad [put]
func UpdateNotePad(c *gin.Context) {
	var notePad model.NotePad
	_ = c.ShouldBindJSON(&notePad)
	err := service.UpdateNotePad(&notePad)
	if err != nil {
		response.FailWithMessage(fmt.Sprintf("更新失败，%v", err), c)
	} else {
		response.OkWithMessage("更新成功", c)
	}
}

// @Tags NotePad
// @Summary 用id查询NotePad
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.NotePad true "用id查询NotePad"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /notePad/findNotePad [get]
func FindNotePad(c *gin.Context) {
	var notePad model.NotePad
	_ = c.ShouldBindQuery(&notePad)
	err, renotePad := service.GetNotePad(notePad.ID)
	if err != nil {
		response.FailWithMessage(fmt.Sprintf("查询失败，%v", err), c)
	} else {
		response.OkWithData(gin.H{"renotePad": renotePad}, c)
	}
}

// @Tags NotePad
// @Summary 分页获取NotePad列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.NotePadSearch true "分页获取NotePad列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /notePad/getNotePadList [get]
func GetNotePadList(c *gin.Context) {
	var pageInfo request.NotePadSearch
	_ = c.ShouldBindQuery(&pageInfo)
	err, list, total := service.GetNotePadInfoList(pageInfo)
	if err != nil {
		response.FailWithMessage(fmt.Sprintf("获取数据失败，%v", err), c)
	} else {
		response.OkWithData(resp.PageResult{
			List:     list,
			Total:    total,
			Page:     pageInfo.Page,
			PageSize: pageInfo.PageSize,
		}, c)
	}
}
