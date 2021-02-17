package api

import (
	"github.com/gin-gonic/gin"
	"net/http"
)


func Verification(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"msg": "token验证通过",
	})
}
