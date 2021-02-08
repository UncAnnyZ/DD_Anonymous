package api

import (
	"net/http"
	"github.com/gin-gonic/gin"
)


func Verification(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"msg": "token验证通过",
	})
}
