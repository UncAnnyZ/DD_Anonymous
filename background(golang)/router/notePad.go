package router

import (
	"background/api"
	"github.com/gin-gonic/gin"
)

func InitNotePadRouter(Router *gin.Engine) {
	NotePadRouter := Router.Group("notePad").Use(MiddleWare())
	{
		NotePadRouter.POST("createNotePad", api.CreateNotePad)   // 新建NotePad
		NotePadRouter.DELETE("deleteNotePad", api.DeleteNotePad) // 删除NotePad
		NotePadRouter.DELETE("deleteNotePadByIds", api.DeleteNotePadByIds) // 批量删除NotePad
		NotePadRouter.PUT("updateNotePad", api.UpdateNotePad)    // 更新NotePad
		NotePadRouter.GET("findNotePad", api.FindNotePad)        // 根据ID获取NotePad
		NotePadRouter.GET("getNotePadList", api.GetNotePadList)  // 获取NotePad列表
	}

}
