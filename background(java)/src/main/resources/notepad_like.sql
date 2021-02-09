/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 09/02/2021 17:27:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for notepad_like
-- ----------------------------
DROP TABLE IF EXISTS `notepad_like`;
CREATE TABLE `notepad_like`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notepad_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL,
  `like_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NULL DEFAULT NULL COMMENT '点赞者的UID',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `notepad_UID`(`notepad_UID`) USING BTREE,
  INDEX `like_UID`(`like_UID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
