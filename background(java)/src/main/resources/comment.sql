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

 Date: 09/02/2021 17:27:52
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for comment
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `notepad_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL,
  `author_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL,
  `comment_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '评论者的UID',
  `commented_UID` varchar(11) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL COMMENT '被评论者的UID',
  `content` varchar(255) CHARACTER SET gb2312 COLLATE gb2312_chinese_ci NOT NULL,
  `comment_date` datetime(0) NOT NULL COMMENT ' 评论时间',
  `like` int(255) NOT NULL DEFAULT 0 COMMENT '点赞数',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `notepad_UID`(`notepad_UID`) USING BTREE,
  INDEX `author_UID`(`author_UID`) USING BTREE,
  INDEX `comment_UID`(`comment_UID`) USING BTREE,
  INDEX `commented_UID`(`commented_UID`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 1 CHARACTER SET = gb2312 COLLATE = gb2312_chinese_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
