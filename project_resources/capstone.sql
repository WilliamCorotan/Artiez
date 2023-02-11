/*
 Navicat Premium Data Transfer

 Source Server         : MySQL-LOCAL
 Source Server Type    : MariaDB
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : capstone

 Target Server Type    : MariaDB
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 11/02/2023 17:19:48
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for base_table
-- ----------------------------
DROP TABLE IF EXISTS `base_table`;
CREATE TABLE `base_table`  (
  `base_id` int(11) NOT NULL AUTO_INCREMENT,
  `base_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`base_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 14 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of base_table
-- ----------------------------
INSERT INTO `base_table` VALUES (1, 'Canvas');
INSERT INTO `base_table` VALUES (2, 'Board');
INSERT INTO `base_table` VALUES (3, 'Cardboard');
INSERT INTO `base_table` VALUES (4, 'Wood');
INSERT INTO `base_table` VALUES (5, 'Glass');
INSERT INTO `base_table` VALUES (6, 'Panel');
INSERT INTO `base_table` VALUES (7, 'Bronze');
INSERT INTO `base_table` VALUES (8, 'Paper');
INSERT INTO `base_table` VALUES (9, 'Fine Art Paper');
INSERT INTO `base_table` VALUES (10, 'Special Paper');
INSERT INTO `base_table` VALUES (11, 'Fabric');
INSERT INTO `base_table` VALUES (12, 'Soft (Fabrics)');
INSERT INTO `base_table` VALUES (13, 'Others');

-- ----------------------------
-- Table structure for medium_table
-- ----------------------------
DROP TABLE IF EXISTS `medium_table`;
CREATE TABLE `medium_table`  (
  `medium_id` int(11) NOT NULL AUTO_INCREMENT,
  `medium_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`medium_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of medium_table
-- ----------------------------
INSERT INTO `medium_table` VALUES (1, 'Acylic');
INSERT INTO `medium_table` VALUES (2, 'Charcoal');
INSERT INTO `medium_table` VALUES (3, 'Digital');
INSERT INTO `medium_table` VALUES (4, 'Oil');
INSERT INTO `medium_table` VALUES (5, 'Watercolor');
INSERT INTO `medium_table` VALUES (6, 'Graphite');
INSERT INTO `medium_table` VALUES (7, 'Ink');
INSERT INTO `medium_table` VALUES (8, 'Pastel');
INSERT INTO `medium_table` VALUES (9, 'Pencil');
INSERT INTO `medium_table` VALUES (10, 'Others');

-- ----------------------------
-- Table structure for ordered_item_table
-- ----------------------------
DROP TABLE IF EXISTS `ordered_item_table`;
CREATE TABLE `ordered_item_table`  (
  `ordered_item_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ordered_item_id`) USING BTREE,
  INDEX `product_id`(`product_id`) USING BTREE,
  CONSTRAINT `ordered_item_table_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product_table` (`product_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ordered_item_table
-- ----------------------------

-- ----------------------------
-- Table structure for payment_method_table
-- ----------------------------
DROP TABLE IF EXISTS `payment_method_table`;
CREATE TABLE `payment_method_table`  (
  `payment_method_id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`payment_method_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of payment_method_table
-- ----------------------------
INSERT INTO `payment_method_table` VALUES (1, 'Credit Card');
INSERT INTO `payment_method_table` VALUES (2, 'Debit Card');
INSERT INTO `payment_method_table` VALUES (3, 'eWallet');
INSERT INTO `payment_method_table` VALUES (4, 'Money Transfer');
INSERT INTO `payment_method_table` VALUES (5, 'Pay Later');

-- ----------------------------
-- Table structure for product_table
-- ----------------------------
DROP TABLE IF EXISTS `product_table`;
CREATE TABLE `product_table`  (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `artist_id` int(11) NULL DEFAULT NULL,
  `width` double NULL DEFAULT NULL,
  `height` double NULL DEFAULT NULL,
  `base_id` int(11) NULL DEFAULT NULL,
  `medium_id` int(11) NULL DEFAULT NULL,
  `date_created` datetime NULL DEFAULT NULL,
  `art_style` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `coa` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `product_preview` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `price` double NULL DEFAULT NULL,
  `sold` tinyint(1) NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE,
  INDEX `artist_id`(`artist_id`) USING BTREE,
  INDEX `base_id`(`base_id`) USING BTREE,
  INDEX `medium_id`(`medium_id`) USING BTREE,
  CONSTRAINT `product_table_ibfk_2` FOREIGN KEY (`medium_id`) REFERENCES `medium_table` (`medium_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `product_table_ibfk_3` FOREIGN KEY (`base_id`) REFERENCES `base_table` (`base_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `product_table_ibfk_4` FOREIGN KEY (`artist_id`) REFERENCES `user_table` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_table
-- ----------------------------

-- ----------------------------
-- Table structure for transaction_table
-- ----------------------------
DROP TABLE IF EXISTS `transaction_table`;
CREATE TABLE `transaction_table`  (
  `transaction_id` int(11) NOT NULL AUTO_INCREMENT,
  `buyer_id` int(11) NULL DEFAULT NULL,
  `date_of_transaction` datetime NULL DEFAULT NULL,
  `order_item_id` int(11) NULL DEFAULT NULL,
  `payment_method_id` int(11) NULL DEFAULT NULL,
  `total_price` double NULL DEFAULT NULL,
  PRIMARY KEY (`transaction_id`) USING BTREE,
  INDEX `buyer_id`(`buyer_id`) USING BTREE,
  INDEX `order_item_id`(`order_item_id`) USING BTREE,
  INDEX `payment_method_id`(`payment_method_id`) USING BTREE,
  CONSTRAINT `transaction_table_ibfk_3` FOREIGN KEY (`payment_method_id`) REFERENCES `payment_method_table` (`payment_method_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `transaction_table_ibfk_4` FOREIGN KEY (`buyer_id`) REFERENCES `user_table` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of transaction_table
-- ----------------------------

-- ----------------------------
-- Table structure for user_table
-- ----------------------------
DROP TABLE IF EXISTS `user_table`;
CREATE TABLE `user_table`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `contact_number` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `role` tinyint(4) NULL DEFAULT NULL,
  `street_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `barangay` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `city` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `province` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `postal_code` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_table
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
