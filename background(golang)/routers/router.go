package routers

import (
	"background/api"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
)

func ParseToken(tokenString string, uid string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Don't forget to validate the alg is what you expect:
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("unexpected signing method: %v", token.Header["alg"])
		}

		// hmacSampleSecret is a []byte containing your secret, e.g. []byte("my_secret_key")
		return []byte(uid), nil
	})
	if token != nil {
		if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
			return claims, nil
		} else {
			return nil, err
		}
	} else {
		return nil, err
	}
}
func MiddleWare() gin.HandlerFunc {
	return func(c *gin.Context) {
		print(111)
		token, _ := c.GetPostForm("token")
		uid, _ := c.GetPostForm("uid")
		parse, _ := ParseToken(token, uid)
		if parse == nil {
			c.JSON(http.StatusUnauthorized, gin.H{
				"code": 500,
				"msg": "无token，请重新登录",
			})
			c.Abort()
			return
		}
	}
}

func SetupRouter() *gin.Engine {
	r := gin.Default()
	r.POST("/verification", MiddleWare(), api.Verification)
	return r
}
