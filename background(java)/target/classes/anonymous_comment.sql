/*
 Navicat Premium Data Transfer

 Source Server         : test
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : dd_anonymous

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 10/02/2021 16:43:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for anonymous_comment
-- ----------------------------
DROP TABLE IF EXISTS `anonymous_comment`;
CREATE TABLE `anonymous_comment`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `anonymous_box_uid` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '匿名箱的uid',
  `comment_uid` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '留言者的UID',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '留言内容',
  `reply` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '发布者回复',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
