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

 Date: 28/02/2023 07:38:40
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for ch_favorites
-- ----------------------------
DROP TABLE IF EXISTS `ch_favorites`;
CREATE TABLE `ch_favorites`  (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `favorite_id` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ch_favorites
-- ----------------------------

-- ----------------------------
-- Table structure for ch_messages
-- ----------------------------
DROP TABLE IF EXISTS `ch_messages`;
CREATE TABLE `ch_messages`  (
  `id` bigint(20) NOT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `from_id` bigint(20) NOT NULL,
  `to_id` bigint(20) NOT NULL,
  `body` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `attachment` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of ch_messages
-- ----------------------------
INSERT INTO `ch_messages` VALUES (1679428124, 'user', 29, 26, 'hi', NULL, 1, '2023-02-27 07:12:44', '2023-02-27 07:16:43');
INSERT INTO `ch_messages` VALUES (1846191465, 'user', 26, 29, '1', NULL, 1, '2023-02-27 07:19:53', '2023-02-27 07:20:08');
INSERT INTO `ch_messages` VALUES (1994742701, 'user', 29, 29, 'hi', NULL, 0, '2023-02-27 09:33:11', '2023-02-27 09:33:11');
INSERT INTO `ch_messages` VALUES (2093633143, 'user', 26, 29, 'test 2', NULL, 1, '2023-02-27 07:19:41', '2023-02-27 07:20:08');
INSERT INTO `ch_messages` VALUES (2107712888, 'user', 26, 29, 'test', NULL, 1, '2023-02-27 09:05:24', '2023-02-27 09:16:24');
INSERT INTO `ch_messages` VALUES (2197243993, 'user', 29, 26, 'hello', NULL, 1, '2023-02-27 07:11:20', '2023-02-27 07:16:43');
INSERT INTO `ch_messages` VALUES (2214388846, 'user', 29, 26, 'test', NULL, 1, '2023-02-27 07:26:23', '2023-02-27 07:30:51');
INSERT INTO `ch_messages` VALUES (2333494403, 'user', 26, 29, 'test', NULL, 1, '2023-02-27 07:16:53', '2023-02-27 07:17:05');
INSERT INTO `ch_messages` VALUES (2365364114, 'user', 29, 26, '1', NULL, 1, '2023-02-27 07:33:30', '2023-02-27 07:43:19');
INSERT INTO `ch_messages` VALUES (2377104943, 'user', 29, 26, 'test', NULL, 0, '2023-02-27 09:16:27', '2023-02-27 09:16:27');
INSERT INTO `ch_messages` VALUES (2387017400, 'user', 29, 26, 'test2', NULL, 0, '2023-02-27 09:20:47', '2023-02-27 09:20:47');

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES (1, '2019_12_14_000001_create_personal_access_tokens_table', 1);
INSERT INTO `migrations` VALUES (2, '2023_02_27_999999_add_active_status_to_users', 1);
INSERT INTO `migrations` VALUES (3, '2023_02_27_999999_add_avatar_to_users', 1);
INSERT INTO `migrations` VALUES (4, '2023_02_27_999999_add_dark_mode_to_users', 1);
INSERT INTO `migrations` VALUES (5, '2023_02_27_999999_add_messenger_color_to_users', 1);
INSERT INTO `migrations` VALUES (6, '2023_02_27_999999_create_favorites_table', 1);
INSERT INTO `migrations` VALUES (7, '2023_02_27_999999_create_messages_table', 1);

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
-- Table structure for personal_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `personal_access_tokens`;
CREATE TABLE `personal_access_tokens`  (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `personal_access_tokens_token_unique`(`token`) USING BTREE,
  INDEX `personal_access_tokens_tokenable_type_tokenable_id_index`(`tokenable_type`, `tokenable_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of personal_access_tokens
-- ----------------------------

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
  CONSTRAINT `product_table_ibfk_4` FOREIGN KEY (`artist_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of product_table
-- ----------------------------
INSERT INTO `product_table` VALUES (37, 'Self Portrait', 'This self-portrait is a striking depiction of the artist, captured in vivid detail with bold brushstrokes and vibrant colors. The subject\'s intense gaze meets the viewer\'s eyes, conveying a sense of introspection and contemplation. The portrait is a masterful exploration of identity and self-expression, inviting the viewer to reflect on their own sense of self.', 33, 12, 18, 'Canvas', 'Oil', 'Portraiture', NULL, '1677518404.jpg', 3699, 0, '2023-02-27 17:20:04', '2023-02-27 17:20:04');
INSERT INTO `product_table` VALUES (38, 'BETWEEN HEAVEN AND EARTH.', '\"BETWEEN HEAVEN AND EARTH\" is a stunning artwork that captures the ethereal beauty of the natural world. The piece depicts a majestic mountain range rising up towards the sky, with fluffy clouds hovering in the distance. The colors are soft and muted, lending a dreamy quality to the landscape. The painting evokes a sense of awe and wonder, inviting the viewer to contemplate their place in the universe and the delicate balance between the earthly and the divine.', 33, 18, 24, 'Canvas', 'Oil', 'Abstract', NULL, '1677520983.jpg', 18300, 0, '2023-02-27 18:03:03', '2023-02-27 18:03:03');
INSERT INTO `product_table` VALUES (39, 'Anxiety', '\"Anxiety\" is a deeply moving artwork that conveys the tumultuous emotions and inner turmoil that can come with the experience of anxiety. The piece features a figure hunched over, their face obscured by writhing tendrils of black and grey that seem to represent the overwhelming thoughts and feelings that can consume a person struggling with anxiety. The colors are dark and intense, conveying a sense of unease and distress. The artwork serves as a poignant reminder of the importance of mental health and the struggles that many people face on a daily basis.', 33, 18, 22, 'Canvas', 'Oil', 'Expressionism', NULL, '1677521130.jpg', 16299, 0, '2023-02-27 18:05:30', '2023-02-27 18:05:30');
INSERT INTO `product_table` VALUES (40, 'Sisa S5 - Lumang Pahina ng Kasaysayan', '\"Sisa S5 - Lumang Pahina ng Kasaysayan\" is a thought-provoking artwork that explores themes of history, memory, and identity. The piece depicts an old and tattered book, open to a page that is partially obscured by a colorful and dynamic abstract composition. The book\'s title, \"Sisa S5,\" is emblazoned on the cover, suggesting a connection to Philippine history and literature. The juxtaposition of the aging book with the vibrant and modern artwork creates a powerful visual contrast, prompting the viewer to consider the interplay between the past and the present, tradition and innovation. Overall, the artwork is a captivating and insightful reflection on the complex relationship between art, history, and culture.', 33, 12, 16, 'Glass', 'Acrylic', 'Expressionism', NULL, '1677521707.jpg', 7500, 0, '2023-02-27 18:15:07', '2023-02-27 18:15:07');
INSERT INTO `product_table` VALUES (41, 'flower', '\"Flower\" is a simple yet striking artwork that celebrates the beauty of nature. The piece features a single flower, rendered in exquisite detail with delicate petals and vibrant colors. The flower is depicted against a stark white background, emphasizing its purity and radiance. The artwork invites the viewer to appreciate the simple pleasures of life and find joy in the natural world. Through its subtle elegance and understated charm, \"Flower\" reminds us of the power of nature to inspire and uplift the human spirit.', 33, 12, 16, 'Canvas', 'Watercolor', 'Contemporary', NULL, '1677522029.jpg', 16500, 0, '2023-02-27 18:20:29', '2023-02-27 18:20:29');
INSERT INTO `product_table` VALUES (42, 'Nubian Warriors of the Nile', '\"Nubian Warriors\" is a dynamic and powerful artwork that captures the strength and resilience of the Nubian people. The piece features two warriors, depicted in bold and vivid colors, with intricate patterns adorning their clothing and weapons. The warriors\' expressions are fierce and determined, conveying a sense of confidence and fearlessness in the face of adversity. The artwork is a tribute to the rich cultural heritage of the Nubian people and a celebration of their indomitable spirit. Through its stunning imagery and evocative symbolism, \"Nubian Warriors\" inspires admiration and respect for the enduring legacy of this remarkable civilization.', 33, 18, 24, 'Fine Art Paper', 'Pencil', 'Folk', NULL, '1677522405.jpg', 8450, 0, '2023-02-27 19:15:52', '2023-02-27 18:26:45');

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
  CONSTRAINT `transaction_table_ibfk_4` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of transaction_table
-- ----------------------------

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
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
  `profile_picture` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (33, 'Da Von Chi', 'Leo', '09123342231', 'leovon@artist.com', '$2y$10$wqQWiypY9r6TmqLtKMh2qevko/wLoyR0uT/kIK6ZqnA7F8TNAC0li', 1, 'Macanaya District II Highway', 'Lapok', 'Aparri', 'Aparri', '1243', '2023-02-27 17:04:57', '2023-02-27 17:00:28', '1677517497.jpg', NULL);

SET FOREIGN_KEY_CHECKS = 1;
