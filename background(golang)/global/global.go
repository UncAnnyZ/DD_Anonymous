package global

import (
	"go.uber.org/zap"

	"background/config"
	"gorm.io/gorm"
)

var (
	GVA_DB     *gorm.DB
	GVA_CONFIG config.Server

	//GVA_LOG    *oplogging.Logger
	GVA_LOG    *zap.Logger
)
