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

 Date: 09/02/2021 17:28:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for anonymous_comment
-- ----------------------------
DROP TABLE IF EXISTS `anonymous_comment`;
CREATE TABLE `anonymous_comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `anonymous_box_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL,
  `comment_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '留言者的UID',
  `content` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL,
  `reply` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '发布者回复',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `anonymous_box_UID`(`anonymous_box_UID`) USING BTREE,
  INDEX `comment_UID`(`comment_UID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
