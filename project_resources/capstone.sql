/*
 Navicat Premium Data Transfer

 Source Server         : MySQL-LOCAL
 Source Server Type    : MariaDB
 Source Server Version : 100427
 Source Host           : localhost:3306
 Source Schema         : capstone

 Target Server Type    : MariaDB
 Target Server Version : 100427
 File Encoding         : 65001

 Date: 15/02/2023 10:47:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets`  (
  `email` varchar(320) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of password_resets
-- ----------------------------
INSERT INTO `password_resets` VALUES ('williamcorotan@gmail.com', '$2y$10$AisZh6/Q7RhAmKxMRbLhqucD0N6sZOwa876TiDTUtoaVIZuGcGtXu', '2023-02-11 10:34:37');

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
  `base` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `medium` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `art_style` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `coa` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `product_preview` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  `price` double NULL DEFAULT NULL,
  `sold` tinyint(1) NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`product_id`) USING BTREE,
  INDEX `artist_id`(`artist_id`) USING BTREE,
  INDEX `base_id`(`base`) USING BTREE,
  INDEX `medium_id`(`medium`) USING BTREE,
  CONSTRAINT `product_table_ibfk_4` FOREIGN KEY (`artist_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 22 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_table
-- ----------------------------
INSERT INTO `product_table` VALUES (1, 'Saccharum alopecuroides (L.) Nutt.', 'erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc', 20, 47, 42, '11', '7', 'Mélissandre', 'gravida', 'scelerisque', 37046.21, 0, '2022-12-14 04:32:09', '2020-10-10 14:34:12');
INSERT INTO `product_table` VALUES (2, 'Stellaria crassifolia Ehrh.', 'convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id', 17, 44, 26, '7', '2', 'Styrbjörn', 'magnis dis', 'morbi', 18196.19, 0, '2022-12-30 13:37:14', '2021-07-23 13:15:44');
INSERT INTO `product_table` VALUES (3, 'Amomum gracile Blume', 'curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque', 18, 29, 22, '1', '3', 'Lorène', 'turpis', 'morbi', 15630.86, 1, '2022-10-27 13:14:27', '2021-11-18 23:37:04');
INSERT INTO `product_table` VALUES (4, 'Urochloa platyphylla (Munro ex C. Wright) R.D. Webster', 'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam', 14, 45, 40, '5', '6', 'Ruì', 'lobortis sapien', 'felis eu', 24662.87, 1, '2023-02-03 00:01:38', '2019-01-22 14:37:53');
INSERT INTO `product_table` VALUES (5, 'Spergularia maritima (All.) Chiov.', 'quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non', 19, 29, 48, '3', '6', 'Régine', 'ac', 'tellus nulla', 38835.36, 0, '2023-01-25 20:54:54', '2021-03-05 20:11:20');
INSERT INTO `product_table` VALUES (6, 'Berteroa DC.', 'eu felis fusce posuere felis sed lacus morbi sem mauris', 3, 22, 13, '6', '8', 'Simplifiés', 'quam pede', 'sagittis', 31378.33, 1, '2023-01-31 01:50:05', '2021-09-17 19:35:22');
INSERT INTO `product_table` VALUES (7, 'Castilleja linariifolia Benth.', 'dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique', 12, 39, 28, '11', '1', 'Tán', 'quisque porta', 'velit', 48904.1, 0, '2023-01-27 00:55:36', '2021-09-11 11:04:12');
INSERT INTO `product_table` VALUES (8, 'Penstemon richardsonii Douglas ex Lindl. var. curtiflorus (D.D. Keck) Cronquist', 'eleifend quam a odio in hac habitasse platea dictumst maecenas', 11, 35, 23, '9', '5', 'Célestine', 'nunc nisl', 'odio', 34435.28, 1, '2022-11-04 07:26:38', '2019-08-19 08:45:52');
INSERT INTO `product_table` VALUES (9, 'Panicum virgatum L.', 'vel ipsum praesent blandit lacinia erat vestibulum sed magna at nunc', 12, 45, 13, '1', '3', 'Zhì', 'ut erat', 'in leo', 17439.95, 1, '2022-12-17 06:03:03', '2019-08-21 22:30:19');
INSERT INTO `product_table` VALUES (10, 'Pteridium arachnoideum (Kaulf.) Maxon', 'faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est donec odio justo sollicitudin ut', 13, 21, 26, '10', '2', 'Liè', 'ut', 'ipsum', 28021.35, 0, '2023-01-28 20:48:35', '2021-10-22 19:59:22');
INSERT INTO `product_table` VALUES (11, 'Trichomanes punctatum Poir. ssp. floridanum W. Boer', 'nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit', 8, 37, 36, '3', '10', 'Kallisté', 'in lacus', 'id nisl', 29525.52, 1, '2022-11-22 01:53:50', '2021-01-03 02:31:46');
INSERT INTO `product_table` VALUES (12, 'Bacidia rubella (Hoffm.) A. Massal.', 'euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis', 8, 21, 23, '4', '9', 'Léana', 'est lacinia', 'sed augue', 8235.75, 1, '2022-12-13 13:53:49', '2021-01-25 02:15:34');
INSERT INTO `product_table` VALUES (13, 'Myriophyllum ussuriense (Regel) Maxim.', 'in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin', 6, 16, 43, '7', '1', 'Garçon', 'augue a', 'purus', 11191.29, 0, '2022-10-13 17:08:53', '2021-03-19 23:40:30');
INSERT INTO `product_table` VALUES (14, 'Ruellia purshiana Fernald', 'porttitor lacus at turpis donec posuere metus vitae ipsum aliquam', 1, 46, 24, '3', '3', 'Andrée', 'eu', 'cras in', 23650.76, 1, '2022-11-04 19:40:29', '2020-01-06 07:59:19');
INSERT INTO `product_table` VALUES (15, 'Carex bulbostylis Mack.', 'lacinia aenean sit amet justo morbi ut odio cras mi', 13, 36, 26, '10', '3', 'Ruò', 'rutrum neque', 'integer aliquet', 32659.02, 1, '2022-11-23 05:38:56', '2019-10-17 23:40:52');
INSERT INTO `product_table` VALUES (16, 'Huperzia nutans (Brack.) Rothm.', 'eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi a', 8, 27, 34, '8', '7', 'Léonie', 'eget', 'tincidunt', 24610.25, 0, '2023-02-02 21:02:35', '2021-07-01 06:03:42');
INSERT INTO `product_table` VALUES (17, 'Myrsine knudsenii (Rock) Hosaka', 'suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean', 11, 16, 32, '12', '9', 'Chloé', 'gravida', 'ultrices', 30275.85, 0, '2023-01-19 07:33:44', '2020-03-21 04:41:50');
INSERT INTO `product_table` VALUES (18, 'Rubus curtipes L.H. Bailey', 'dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur', 16, 44, 47, '11', '4', 'Marie-thérèse', 'quis justo', 'nulla tellus', 31020.44, 1, '2022-12-13 05:29:56', '2021-08-03 10:28:52');
INSERT INTO `product_table` VALUES (19, 'Polygonum capitatum Buch.-Ham. ex D. Don', 'vulputate elementum nullam varius nulla facilisi cras non velit nec nisi', 16, 32, 25, '5', '6', 'Stévina', 'ipsum primis', 'neque', 44664.27, 1, '2022-12-08 08:27:24', '2020-08-15 02:59:05');
INSERT INTO `product_table` VALUES (20, 'Rhynchospora solitaria Harper', 'libero ut massa volutpat convallis morbi odio odio elementum eu', 16, 23, 31, '7', '1', 'Maëlys', 'eu magna', 'nulla', 36856.55, 0, '2023-01-12 06:52:37', '2020-09-15 17:20:20');
INSERT INTO `product_table` VALUES (21, 'test 2', 'test 2', 26, 18, 13, '6', '4', 'Avant-garde', 'N/A', 'N/A', 12000, 0, '2023-02-13 06:51:09', '2023-02-13 06:51:09');

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
  CONSTRAINT `transaction_table_ibfk_4` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of transaction_table
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `contact_number` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
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
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'Moodie', 'Loren', '09192593278', 'lmoodie0@slashdot.org', 'mnwaVDa', 0, '37 West Drive', 'Shopko', 'Sbikha', 'Davao del Norte', NULL, '2023-02-05 20:31:11', '2020-08-16 05:07:01');
INSERT INTO `users` VALUES (2, 'Degenhardt', 'Stacie', '09526042064', 'sdegenhardt1@ox.ac.uk', 'nvjhv19', 0, '56 Cherokee Park', 'Becker', 'Heung-hai', 'Rizal', NULL, '2022-03-26 08:53:01', '2019-06-21 18:02:28');
INSERT INTO `users` VALUES (3, 'Foden', 'Rodd', '09034721175', 'rfoden2@google.com.hk', 'Ok3fTiVSik', 1, '59 Duke Crossing', 'Golf View', 'Leninskiy', 'Cavite', '678944', '2022-05-18 09:45:19', '2021-11-20 13:17:25');
INSERT INTO `users` VALUES (4, 'MacGibbon', 'Titus', '09856433281', 'tmacgibbon3@gmpg.org', 'A0mYVRm', 0, '44 Longview Point', 'Londonderry', 'Barru', 'Bulacan', NULL, '2022-09-24 12:37:53', '2020-01-09 05:05:42');
INSERT INTO `users` VALUES (5, 'Tackley', 'Mason', '09019048514', 'mtackley4@answers.com', 'uf0XZGxltG', 0, '07 Southridge Parkway', 'Anthes', 'Oslo', 'Oslo', '0915', '2022-04-23 19:10:09', '2021-12-06 04:59:20');
INSERT INTO `users` VALUES (6, 'Ovitts', 'Mickie', '09351776419', 'movitts5@printfriendly.com', 'dTivxw7JCOr', 0, '7900 Dapin Terrace', 'Nancy', 'Qingxi', 'Iligan', NULL, '2022-07-19 22:46:17', '2019-01-09 08:33:43');
INSERT INTO `users` VALUES (7, 'Meni', 'Dennis', '09946899575', 'dmeni6@netvibes.com', 'LhFJy1chtVxO', 0, '6 Morning Trail', 'West', 'San Juan', 'NCR', '6227', '2022-12-25 19:09:26', '2019-09-12 07:28:37');
INSERT INTO `users` VALUES (8, 'Philipsohn', 'Berrie', '09849141992', 'bphilipsohn7@webmd.com', '04CjxsgbyB', 1, '0 Manufacturers Street', '8th', 'Moncton', 'New Brunswick', 'E1C', '2022-09-10 19:31:07', '2019-08-01 06:06:25');
INSERT INTO `users` VALUES (9, 'Tremlett', 'Gerti', '09956338939', 'gtremlett8@theglobeandmail.com', 'sheo7IC', 0, '74799 Clyde Gallagher Plaza', 'Nevada', 'Carleton Place', 'Ontario', 'K7C', '2022-07-10 05:22:42', '2019-07-11 11:49:38');
INSERT INTO `users` VALUES (10, 'Binham', 'Bryanty', '09245847943', 'bbinham9@123-reg.co.uk', 'k0tSWNx', 0, '8851 Ridgeview Circle', 'School', 'Cruzeiro', 'Aveiro', '3700-364', '2022-08-03 02:23:53', '2021-12-15 16:41:45');
INSERT INTO `users` VALUES (11, 'Queste', 'Fitz', '09757032588', 'fquestea@naver.com', '6nKaH8MSq', 1, '4138 Arkansas Court', 'Packers', 'Vällingby', 'Stockholm', '162 50', '2022-02-15 10:57:25', '2018-12-04 02:13:50');
INSERT INTO `users` VALUES (12, 'Maltby', 'Ladonna', '09738889957', 'lmaltbyb@washingtonpost.com', 'uXtWXVqe', 1, '969 Johnson Way', 'Sommers', 'Miřetice', 'NCR', '539 55', '2022-06-16 06:00:03', '2021-02-10 22:26:19');
INSERT INTO `users` VALUES (13, 'Karpinski', 'Humphrey', '09895863590', 'hkarpinskic@springer.com', 'hJJy8TXF', 1, '0 American Trail', 'Bultman', 'Buenaventura', 'Rizal', '764517', '2022-03-25 03:35:19', '2019-11-16 02:00:31');
INSERT INTO `users` VALUES (14, 'Given', 'Bette-ann', '09757895937', 'bgivend@spiegel.de', '39FYMX', 1, '6 Crest Line Way', 'Russell', 'Nice', 'Provence-Alpes-Côte d\'Azur', '06306 CEDE', '2022-08-23 09:19:11', '2021-09-10 23:43:57');
INSERT INTO `users` VALUES (15, 'Phare', 'Roley', '09278222534', 'rpharee@imageshack.us', 'a4jkyiP3t', 1, '2 Heffernan Trail', 'Harbort', 'Flen', 'Södermanland', '642 82', '2022-06-24 20:40:10', '2021-08-27 10:23:03');
INSERT INTO `users` VALUES (16, 'Haack', 'Dara', '09204028665', 'dhaackf@cnn.com', 'vtqtXRTS', 0, '493 Stephen Road', 'Toban', 'Laojieji', 'Davao del Sur', NULL, '2022-12-21 22:55:31', '2020-12-15 04:29:59');
INSERT INTO `users` VALUES (17, 'Lune', 'Arturo', '09146472956', 'aluneg@canalblog.com', 'dBFQk2f8imD', 0, '8749 Russell Place', 'Cascade', 'Spétses', 'Davao del Norte', NULL, '2022-09-13 06:17:17', '2019-03-27 07:30:00');
INSERT INTO `users` VALUES (18, 'Beazleigh', 'Deni', '09115939061', 'dbeazleighh@bbb.org', 'Plg4JZO0PSV', 1, '014 Truax Plaza', 'Stephen', 'Sabaneta', 'Bicol', '055457', '2022-03-30 14:42:16', '2021-10-25 10:10:15');
INSERT INTO `users` VALUES (19, 'Vivians', 'Else', '09411207219', 'eviviansi@squidoo.com', '9UkZNhjUODh', 0, '57332 Calypso Alley', 'Hoffman', 'Llaillay', 'Bicol', NULL, '2022-06-18 16:44:14', '2021-06-09 03:02:51');
INSERT INTO `users` VALUES (20, 'Raittie', 'Remy', '09178898436', 'rraittiej@nymag.com', 'B2oBp2Jg', 1, '3 Knutson Trail', 'Hovde', 'Bogoroditsk', 'NCR', '301839', '2022-03-25 07:26:53', '2020-07-01 07:04:56');
INSERT INTO `users` VALUES (26, 'Corotan', 'William Anthony', '09478051730', 'williamcorotan@gmail.com', '$2y$10$VXax4Ms1.E1/Upb52SdzHOCGaFqKZ1YpGoN631OjSmPAH9fA3kn3O', 0, 'test st add', 'brgy', 'city', 'province', '1920', '2023-02-13 05:10:25', '2023-02-13 05:10:25');
INSERT INTO `users` VALUES (27, 'Corotan', 'William Anthony', '+639478051730', 'test@email.com', '$2y$10$egdWUVzbc/vxj8KXloQizeTRALZ4p7q6ekwKQGIBix6gYiDzBH68S', 1, 'test st add', 'brgy', 'city', 'province', '1920', '2023-02-14 06:07:50', '2023-02-14 06:07:50');

SET FOREIGN_KEY_CHECKS = 1;
