/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80032 (8.0.32)
 Source Host           : localhost:3306
 Source Schema         : crowdfundingcr

 Target Server Type    : MySQL
 Target Server Version : 80032 (8.0.32)
 File Encoding         : 65001

 Date: 12/10/2024 22:57:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORY_ID` int NOT NULL,
  `NAME` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`CATEGORY_ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'society');
INSERT INTO `category` VALUES (2, 'disaster');
INSERT INTO `category` VALUES (3, 'children');
INSERT INTO `category` VALUES (4, 'physical disability');

-- ----------------------------
-- Table structure for donation
-- ----------------------------
DROP TABLE IF EXISTS `donation`;
CREATE TABLE `donation`  (
  `DONATION_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '捐赠标识',
  `DATE` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '日期',
  `AMOUNT` int NULL DEFAULT NULL COMMENT '金额',
  `GIVER` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '捐赠人',
  `FUNDRAISER_ID` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '筹款人标识',
  PRIMARY KEY (`DONATION_ID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of donation
-- ----------------------------
INSERT INTO `donation` VALUES ('1', '1', 1, '1', '1');
INSERT INTO `donation` VALUES ('1728741377835', '1728741377813', 11, '1', '1');
INSERT INTO `donation` VALUES ('1728741450838', '1728741450834', 100, 'Bob', '1');
INSERT INTO `donation` VALUES ('1728741510671', '1728741450834', 100, 'Bob', '1');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISER_ID` int NOT NULL AUTO_INCREMENT,
  `ORGANIZER` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `CAPTION` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `TARGET_FUNDING` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `CURRENT_FUNDING` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `CITY` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `ACTIVE` int NULL DEFAULT NULL,
  `CATEGORY_ID` int NOT NULL,
  `IMG` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `DETAIL` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`, `CATEGORY_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 9 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'Jackson', 'Rider Care Project', '10,000 AUD', '1000 AUD', 'Byron Bay', 1, 1, './resources/pc-img/18111228220e.png', NULL);
INSERT INTO `fundraiser` VALUES (2, 'Jackson1', 'Language training equipment for special needs children', '20,000 AUD', '2000 AUD', 'Byron Bay', 1, 1, './resources/pc-img/03143658bcpt.jpg', NULL);
INSERT INTO `fundraiser` VALUES (3, 'Jackson2', 'High altitude employee oxygen bar', '30,000 AUD', '2000 AUD', 'Byron Bay', 1, 1, './resources/pc-img/04194040y8hy.png', NULL);
INSERT INTO `fundraiser` VALUES (4, 'Jackson3', 'Charitable Fundraising | Legal Services for Farmers\' Public Welfare', '40,000 AUD', '2000 AUD', 'Byron Bay', 1, 1, './resources/pc-img/11113536p24l.jpg', NULL);
INSERT INTO `fundraiser` VALUES (5, 'Jackson4', 'left-behind children', '50,000 AUD', '2000 AUD', 'Byron Bay', 1, 1, './resources/pc-img/aaa.jpg', NULL);
INSERT INTO `fundraiser` VALUES (7, '1', '1', '1', '1', NULL, 1, 1, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
