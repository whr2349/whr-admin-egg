/*
 Navicat Premium Data Transfer

 Source Server         : Mysql57
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : demo

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 09/08/2020 22:32:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for menus
-- ----------------------------
DROP TABLE IF EXISTS `menus`;
CREATE TABLE `menus`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `menu_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `type` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '菜单类型目录还是页面',
  `icon` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '图标',
  `route` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '节点路由',
  `alive` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '路由缓存',
  `path` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '文件路径',
  `nub` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '序号',
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `menu_name`(`menu_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menus
-- ----------------------------
INSERT INTO `menus` VALUES ('1be5777a-d203-11ea-b294-02fcdc4e7412', '信息管理', '2020-07-30 09:15:18', '2020-07-30 09:15:51', '0', 'el-icon-eleme', '/index/information', '0', '', '1', '');
INSERT INTO `menus` VALUES ('1be578e2-d203-11ea-b294-02fcdc4e7412', '会员列表', '2020-07-30 09:26:13', '2020-07-30 09:26:16', '0', 'el-icon-user-solid', '/index/information/memberinfo', '0', 'information/memberinfo', '2', '1be5777a-d203-11ea-b294-02fcdc4e7412');
INSERT INTO `menus` VALUES ('1be579a0-d203-11ea-b294-02fcdc4e7412', '系统设置', '2020-07-30 09:29:13', '2020-07-30 09:29:15', '0', 'el-icon-s-tools', '/index/sys', '0', '', '3', NULL);
INSERT INTO `menus` VALUES ('1be57a36-d203-11ea-b294-02fcdc4e7412', '用户列表', '2020-07-30 09:52:03', '2020-07-30 09:52:06', '0', 'el-icon-s-custom', '/index/sys/users', '0', 'sys/users', '4', '1be579a0-d203-11ea-b294-02fcdc4e7412');
INSERT INTO `menus` VALUES ('1be57ac2-d203-11ea-b294-02fcdc4e7412', '权限管理', '2020-07-30 09:54:39', '2020-07-30 09:54:48', '0', 'el-icon-s-check', '/index/sys/authority', '0', NULL, '5', '1be579a0-d203-11ea-b294-02fcdc4e7412');
INSERT INTO `menus` VALUES ('1be57b4e-d203-11ea-b294-02fcdc4e7412', '菜单列表', '2020-07-30 09:55:18', '2020-07-30 09:56:32', '0', NULL, '/index/sys/authority/menus', '0', 'sys/authority/menus', '6', '1be57ac2-d203-11ea-b294-02fcdc4e7412');
INSERT INTO `menus` VALUES ('1be57bda-d203-11ea-b294-02fcdc4e7412', '角色管理', '2020-07-30 09:57:18', '2020-07-30 09:58:27', '0', NULL, '/index/sys/authority/roles', '0', 'sys/authority/roles', '7', '1be57ac2-d203-11ea-b294-02fcdc4e7412');

-- ----------------------------
-- Table structure for role_menus
-- ----------------------------
DROP TABLE IF EXISTS `role_menus`;
CREATE TABLE `role_menus`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `role_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色id',
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `role_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `role_name`(`role_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20200717085621-init-users.js');
INSERT INTO `sequelizemeta` VALUES ('20200720011721-init-roles.js');
INSERT INTO `sequelizemeta` VALUES ('20200720012022-init-user_roles.js');
INSERT INTO `sequelizemeta` VALUES ('20200720012730-init-menus.js');
INSERT INTO `sequelizemeta` VALUES ('20200720015110-init-role_menus.js');
INSERT INTO `sequelizemeta` VALUES ('20200720072140-init-usersAddBranch.js');
INSERT INTO `sequelizemeta` VALUES ('20200720080425-init-usersAddpwd.js');
INSERT INTO `sequelizemeta` VALUES ('20200729081447-addcolsmenus.js');
INSERT INTO `sequelizemeta` VALUES ('20200729084927-addcolsmenus.js');

-- ----------------------------
-- Table structure for user_roles
-- ----------------------------
DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `role_id` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色id',
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `user_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `age` int(11) NULL DEFAULT NULL,
  `login` tinyint(1) NULL DEFAULT 0,
  `last_sign_in_at` datetime(0) NULL DEFAULT NULL,
  `created_at` datetime(0) NULL DEFAULT NULL,
  `updated_at` datetime(0) NULL DEFAULT NULL,
  `branch` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('3a550720-ca65-11ea-ac45-c3e2ba5d35de', '吴迪', 30, 0, NULL, '2020-07-20 08:44:30', '2020-07-20 08:44:30', '研发中心', '123', 'wudi');
INSERT INTO `users` VALUES ('4f9dfb90-ca66-11ea-b90f-9bf942741b35', '孙悦', 38, 0, NULL, '2020-07-20 08:52:15', '2020-07-20 08:52:15', '营销中心', '123', 'sunyue');
INSERT INTO `users` VALUES ('55cb0410-ca64-11ea-91c4-27afcddeca88', '王浩然', 30, 0, NULL, '2020-07-20 08:38:07', '2020-07-20 08:38:07', '研发中心', '123', 'wanghaoran');
INSERT INTO `users` VALUES ('915d7430-ca65-11ea-ac45-c3e2ba5d35de', '武磊', 30, 0, NULL, '2020-07-20 08:46:56', '2020-07-20 08:46:56', '营销中心', '123', 'wulei');
INSERT INTO `users` VALUES ('9fca89e0-ca65-11ea-ac45-c3e2ba5d35de', '孙志敏', 24, 0, NULL, '2020-07-20 08:47:20', '2020-07-20 08:58:47', '营销中心', '123', 'sunzhimin');
INSERT INTO `users` VALUES ('e1f93f10-ca64-11ea-ac45-c3e2ba5d35de', '朱云萌', 30, 0, NULL, '2020-07-20 08:42:02', '2020-07-20 08:42:02', '研发中心', '123', 'zhuyunmeng');

SET FOREIGN_KEY_CHECKS = 1;
