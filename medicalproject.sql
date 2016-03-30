/*
Navicat MySQL Data Transfer

Source Server         : test
Source Server Version : 50545
Source Host           : localhost:3306
Source Database       : medicalproject

Target Server Type    : MYSQL
Target Server Version : 50545
File Encoding         : 65001

Date: 2016-02-05 11:51:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Admin_id` varchar(255) DEFAULT NULL,
  `Admin_name` varchar(255) NOT NULL,
  `Admin_password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES (null, 'admin1号', 'ICy5YqxZB1uWSwcVLSNLcA==');
INSERT INTO `admin` VALUES (null, 'admin2号', 'ICy5YqxZB1uWSwcVLSNLcA==');
INSERT INTO `admin` VALUES (null, 'admin3号', 'ICy5YqxZB1uWSwcVLSNLcA==');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image` (
  `image_id` varchar(40) NOT NULL,
  `p_medical_no` int(4) unsigned zerofill DEFAULT NULL,
  `image_url` varchar(80) NOT NULL,
  `id` varchar(50) NOT NULL,
  `upload_date` varchar(255) DEFAULT NULL,
  `mark` varchar(60) DEFAULT NULL,
  `mark_date` varchar(255) DEFAULT NULL,
  `mark_d_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES ('0e2acd73-0727-40eb-b642-8361be4fe324', '0081', 'http://7xlunq.com1.z0.glb.clouddn.com/Chrysanthemum.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-12-20 15:35:16', '0', null, null);
INSERT INTO `image` VALUES ('0feeed14-7197-46fb-8e51-b2c02d4216b3', '0052', 'http://7xlunq.com1.z0.glb.clouddn.com/nanguachahu_1.jpg', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-12-3 19:45:53', '1', '2015-12-19 20:58:13', 'undefined');
INSERT INTO `image` VALUES ('14867a68-2c08-4434-904f-444378607d0d', null, 'http://7xlunq.com1.z0.glb.clouddn.com/3.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-10 21:03:20', '1', '2015-12-20 15:44:10', 'undefined');
INSERT INTO `image` VALUES ('17654724-b893-4895-b0fb-16aac3a46d80', '0051', 'http://7xlunq.com1.z0.glb.clouddn.com/CIMG0181.JPG', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-11-29 18:38:57', '1', '2015-12-20 19:58:20', 'undefined');
INSERT INTO `image` VALUES ('17785d00-c710-4b84-9f87-7e8b9340e5b0', null, 'http://7xlunq.com1.z0.glb.clouddn.com/QQ%E6%88%AA%E5%9B%BE20150225121150.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-10 17:21:22', '1', '2015-11-10 17:21:49', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259');
INSERT INTO `image` VALUES ('2270a766-92b0-4e98-bc0a-8acad676809b', null, 'http://7xlunq.com1.z0.glb.clouddn.com/%E6%B5%B7%E7%BB%B5%E5%AE%9D.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-4 11:56:36', '1', '2015-11-4 12:06:10', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43');
INSERT INTO `image` VALUES ('2577bac6-15c2-425e-9912-d6516efcb414', null, 'http://7xlunq.com1.z0.glb.clouddn.com/%E5%AD%99%E6%82%9F%E7%A9%BA.JPG', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-4 11:56:37', '1', '2015-11-9 10:27:47', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259');
INSERT INTO `image` VALUES ('35237ad3-77a5-42ff-b5d7-22a0ec833065', '0087', 'http://7xlunq.com1.z0.glb.clouddn.com/Chrysanthemum.jpg', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-12-28 21:24:31', '0', null, null);
INSERT INTO `image` VALUES ('41f707fd-e908-422d-98c5-bf1c3b2bf6ce', null, 'http://7xlunq.com1.z0.glb.clouddn.com/%E6%B5%B7%E7%BB%B5%E5%AE%9D.jpg', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-11-7 15:49:38', '1', '2015-12-15 11:54:52', 'undefined');
INSERT INTO `image` VALUES ('49d8558a-d8a8-4c49-8d70-d03702463c90', '0051', 'http://7xlunq.com1.z0.glb.clouddn.com/CIMG0153.JPG', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-11-29 18:39:1', '1', '2015-12-15 17:36:22', 'undefined');
INSERT INTO `image` VALUES ('4c61fac1-12b0-44ba-bd9f-4fff12994f3f', null, 'http://7xlunq.com1.z0.glb.clouddn.com/0.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-7 15:49:16', '1', '2015-11-10 17:23:01', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259');
INSERT INTO `image` VALUES ('56cc974b-31f1-4a88-ba5f-4a23ceec9b7e', null, 'http://7xlunq.com1.z0.glb.clouddn.com/%E5%9B%BE%E5%9B%BE.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-4 11:20:9', '1', '2015-11-4 11:25:57', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259');
INSERT INTO `image` VALUES ('62eef0f9-f3ce-4432-a0a6-7784fdc16645', null, 'http://7xlunq.com1.z0.glb.clouddn.com/%E6%B4%BE%E5%A4%A7%E6%98%9F.jpeg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-4 11:56:37', '1', '2015-11-5 16:53:21', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43');
INSERT INTO `image` VALUES ('679ea005-3c9c-4ed3-93eb-4d81d74462a1', '0040', 'http://7xlunq.com1.z0.glb.clouddn.com/CIMG0151.JPG', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-11-23 21:38:10', '1', '2015-12-15 14:44:59', 'undefined');
INSERT INTO `image` VALUES ('731b26a4-83a8-4a47-b37e-6be0d6c51ab3', null, 'http://7xlunq.com1.z0.glb.clouddn.com/IMG_1956_%E5%89%AF%E6%9C%AC.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-7 14:29:25', '1', '2015-11-10 17:22:06', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259');
INSERT INTO `image` VALUES ('8fef8d2b-3595-4fca-9d7e-dea6a42c214e', null, 'http://7xlunq.com1.z0.glb.clouddn.com/1.png', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-7 13:54:31', '1', '2015-11-10 17:23:45', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259');
INSERT INTO `image` VALUES ('94e7f23e-1ebd-4099-a185-b2410aa37f5e', '0087', 'http://7xlunq.com1.z0.glb.clouddn.com/Desert.jpg', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-12-28 21:24:40', '0', null, null);
INSERT INTO `image` VALUES ('a62acf56-cca9-4477-8449-9b56ccbb8933', null, 'http://7xlunq.com1.z0.glb.clouddn.com/111111111.png', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-10 17:21:22', '1', '2015-11-10 17:22:16', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259');
INSERT INTO `image` VALUES ('aaecab12-71ac-4181-b205-5174be06d1f2', null, 'http://7xlunq.com1.z0.glb.clouddn.com/7.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-10 21:03:21', '0', null, null);
INSERT INTO `image` VALUES ('b3f36bf9-5d3c-4571-9100-7a81a63493e0', '0085', 'http://7xlunq.com1.z0.glb.clouddn.com/CIMG0502.JPG', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-12-26 9:37:51', '0', null, null);
INSERT INTO `image` VALUES ('c23ef95d-58f9-41f4-9544-0346d41d1370', '0086', 'http://7xlunq.com1.z0.glb.clouddn.com/CIMG0474.JPG', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-12-26 23:28:7', '0', null, null);
INSERT INTO `image` VALUES ('d71e1817-4fa9-430a-b4bf-000da2ccd85f', null, 'http://7xlunq.com1.z0.glb.clouddn.com/%E5%A4%A7%E8%84%B8%E7%8C%AB.jpg', 'fa528b30-a36f-4224-81d4-ac803fd714ce', '2015-11-4 11:56:36', '1', '2015-11-4 12:06:43', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43');
INSERT INTO `image` VALUES ('e24479e6-d8b3-436c-91ff-3d2af167b328', '0087', 'http://7xlunq.com1.z0.glb.clouddn.com/Lighthouse.jpg', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-12-28 21:24:21', '0', null, null);
INSERT INTO `image` VALUES ('f58e85e0-7337-40a7-b29e-a829e181da3c', '0050', 'http://7xlunq.com1.z0.glb.clouddn.com/CIMG0182.JPG', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-11-29 18:34:55', '1', '2015-12-17 10:33:58', 'undefined');
INSERT INTO `image` VALUES ('fa3ac2e7-ce66-481c-88c0-7907266d8920', null, 'http://7xlunq.com1.z0.glb.clouddn.com/psu.jpg', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2015-11-7 15:40:29', '1', '2015-12-17 10:34:48', 'undefined');
INSERT INTO `image` VALUES ('ffc530c7-06f9-41be-b110-3a9224826ce3', '0088', 'http://7xlunq.com1.z0.glb.clouddn.com/CIMG0500.JPG', '0b01e316-1c9f-4e1c-a07f-d152c266846f', '2015-12-29 14:24:29', '0', null, null);

-- ----------------------------
-- Table structure for t_diagnosis
-- ----------------------------
DROP TABLE IF EXISTS `t_diagnosis`;
CREATE TABLE `t_diagnosis` (
  `d_diagnosis_date` varchar(20) NOT NULL,
  `p_register_id` varchar(40) NOT NULL,
  `d_doctor_id` varchar(40) NOT NULL,
  `p_id` varchar(40) NOT NULL,
  `p_medical_no` int(12) DEFAULT NULL,
  `p_explain` text,
  `p_diagnosis` text,
  `p_treatment` text,
  `p_memo` text,
  PRIMARY KEY (`p_register_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 PACK_KEYS=0 COMMENT='本次诊断资料清单——诊断结论_治疗草案表';

-- ----------------------------
-- Records of t_diagnosis
-- ----------------------------
INSERT INTO `t_diagnosis` VALUES ('2015-12-28 21:29:51', '1181bf7e-fa36-4ab9-ba16-602f4d5e62d6', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, null, 'wwweeqv', '文儿去去去', null);
INSERT INTO `t_diagnosis` VALUES ('2015-12-29 13:40:11', '23204d27-72ee-4742-a5f9-42ca3393ba55', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, null, '事实上大师', '', null);
INSERT INTO `t_diagnosis` VALUES ('2015-12-29 13:40:27', '3a5a6c1b-7824-47ad-a106-fb02399fc4cd', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, null, '顶顶顶顶是', '啊啊S型心事重重', null);
INSERT INTO `t_diagnosis` VALUES ('2015-12-29 13:42:45', 'a94af5e4-d0ef-4d33-8a08-5b10120cf41c', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, null, '啥都回复阿富汗算法   啥速度放好水  是啊好的  的神色是宿舍水水水水水水水水水水水水水水水水水水水水', '挖的是打发谁水水水水水水水水水水水水是付费我去我去去我我我我', null);
INSERT INTO `t_diagnosis` VALUES ('2015-12-29 13:43:22', 'afb33f4d-6aa5-484b-ac1f-35e1a5f5f2c2', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, null, '发反反复复反复反复反复反复反复发生啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊', '大大大大是顶顶顶顶顶顶顶顶', null);
INSERT INTO `t_diagnosis` VALUES ('2015-12-27 14:49:34', 'b7a24200-e41d-46a2-945c-89417f8d9280', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, null, '去去去', '额鹅鹅鹅', null);

-- ----------------------------
-- Table structure for t_doctor_info
-- ----------------------------
DROP TABLE IF EXISTS `t_doctor_info`;
CREATE TABLE `t_doctor_info` (
  `d_nickname` varchar(20) NOT NULL,
  `d_register_date` varchar(10) DEFAULT NULL,
  `d_password` varchar(50) DEFAULT NULL,
  `d_doctor_id` varchar(37) NOT NULL,
  `d_DID` char(18) DEFAULT NULL,
  `d_name` char(10) DEFAULT NULL,
  `d_birthday` varchar(10) DEFAULT NULL,
  `d_sex` char(8) CHARACTER SET gb2312 DEFAULT NULL,
  `d_title` char(10) DEFAULT NULL,
  `d_major` char(10) DEFAULT NULL,
  `d_hospital` varchar(20) DEFAULT NULL,
  `d_mobile` char(16) DEFAULT NULL,
  `d_email` char(20) DEFAULT NULL,
  `d_qq` char(10) DEFAULT NULL,
  `d_WeChat` char(11) DEFAULT NULL,
  `d_t1_id` char(7) DEFAULT NULL,
  `d_t2_id` char(7) DEFAULT NULL,
  `d_bachelor_no` varchar(20) DEFAULT NULL,
  `d_master_no` varchar(20) DEFAULT NULL,
  `d_doctor_no` varchar(20) DEFAULT NULL,
  `d_title_no` varchar(20) DEFAULT NULL,
  `d_education` varchar(255) DEFAULT NULL,
  `d_qualification` varchar(255) DEFAULT NULL,
  `del` int(2) DEFAULT '0',
  PRIMARY KEY (`d_doctor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 PACK_KEYS=0 COMMENT='医生信息表';

-- ----------------------------
-- Records of t_doctor_info
-- ----------------------------
INSERT INTO `t_doctor_info` VALUES ('12奥奥', null, '123', '0a67db8f-cc5f-426f-b800-2c607a63bd98', null, '123', null, null, null, null, '千佛山', '1233211', '1111@qq.com', null, null, null, null, null, null, null, null, null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('1234', '2015-12-23', 'ICy5YqxZB1uWSwcVLSNLcA==', '13764314-ffe7-4e89-8b43-bd49001cda28', '11111111111111111', '2015-12-15', '哈金额', null, 'null', 'null', '千佛山', '112212', '2015-12-15', '111@qq.com', null, '1111', '111', '21', '2131322', '1231', '12331', null, null, '1');
INSERT INTO `t_doctor_info` VALUES ('123aacc', null, '1111', '14af3331-9d60-4f26-b1a6-53857eacbc97', null, '1233', null, null, null, null, '千佛山', '11222', '12312', null, null, null, null, null, null, null, null, null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('12341', null, '123', '2908eed4-65f6-411a-8a17-2cde99dfab96', null, '112', null, null, null, null, '千佛山', '213322111', '1111', null, null, null, null, null, null, null, null, null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('测试1', null, '111', '32a60837-23ac-427a-9ecb-43804b22baa0', null, '123', null, null, null, null, '千佛山', '12342333333', '1233@qq.com', null, null, null, null, null, null, null, null, null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('12131', '2015-12-28', 'ICy5YqxZB1uWSwcVLSNLcA==', '51eefc68-8eb9-4ad3-8785-95f07c358ef2', '111122222121111112', '11121', '2015-12-16', null, '副主任医师', '2', '人民医院', '11111111111', '12333@qq.com', '213113', '12223331', '', '', '123e', '', '', '', null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('aaa11', '2015-12-25', 'ICy5YqxZB1uWSwcVLSNLcA==', '66c6588c-8893-4630-bd89-7c753d490950', '111', '111', '2015-12-15', null, '主治医师', '3', '武警医院', '111', '123@qq.com', '222', '111', '1111', '111', '22', '11', '22', '333', null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('123qq', null, '123', '6a048efb-6d95-474e-b181-615abeec8d74', null, '123', null, null, null, null, '武警医院', '123122222111', '1111@123.com', null, null, null, null, null, null, null, null, null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('1eq', null, '111', '6e860987-76d1-4d5e-b699-1f8f32afa28c', null, '1231', null, null, null, null, '武警医院', '12111111111', '2133@qq.com', null, null, null, null, null, null, null, null, null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('ceshi', '2015-12-23', 'ICy5YqxZB1uWSwcVLSNLcA==', 'b22961c4-09d1-45f8-8d15-fc513205bc68', '111111111111222222', 'hgq', '1997-05-07', '男', '主治医师', '5', '山东省立医院', '12222222222', '33222@qq.com', '222222', '33333', '111', '112', '222', '111', '111', '12232', null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('123', '2015-12-23', 'ICy5YqxZB1uWSwcVLSNLcA==', 'c58c97a1-e2b8-4abe-b6f6-0c8d060a453e', '11111111111', '发发发', '2015-12-02', '男', '副主任医师', '药学', '山东省立医院', '11111111111', '111@qq.com', '1223', null, '222', '111', null, null, null, '11323321', null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('00000', '2015-12-29', 'ICy5YqxZB1uWSwcVLSNLcA==', 'ea678465-5c64-477c-be7a-565316d2f797', '123121111111111111', '1213', '2015-12-08', '男', '主任医师', '3', '山东省立医院', '12333332211', '212222@qq.com', '21222', '1222', '', '', '', '', '', '', null, null, '0');
INSERT INTO `t_doctor_info` VALUES ('123111s', '2015-12-25', 'ICy5YqxZB1uWSwcVLSNLcA==', 'eda4334f-c981-4c18-b58d-5da77805a0ef', '111', '1', '2015-12-02', '女', 'null', 'null', '省中医', '111', '111@qq.com', '111', '111', '', '', '', '', '', '', null, null, '1');
INSERT INTO `t_doctor_info` VALUES ('医生乙', '2015-12-10', 'ICy5YqxZB1uWSwcVLSNLcA==', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', null, '医生乙', '2000-01-19', '男', '22', '22', '省中医', '22', '22', '22', '77', '77', '77', '77', '77', '66', '6', '66', '', '0');
INSERT INTO `t_doctor_info` VALUES ('医生甲', '2015-12-10', 'ICy5YqxZB1uWSwcVLSNLcA==', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', null, '医生甲', '1990-10-20', '男', '33', '222', '省中医', '1111', '2222', '90', '1234', '222', '22', '3', '4', '4', '5', '5', '', '0');

-- ----------------------------
-- Table structure for t_doctor_login
-- ----------------------------
DROP TABLE IF EXISTS `t_doctor_login`;
CREATE TABLE `t_doctor_login` (
  `id` int(11) NOT NULL,
  `p_doctor_id` int(7) NOT NULL COMMENT 'FK 注1：t_doctor_info',
  `p_pwd` char(50) NOT NULL COMMENT '密码',
  PRIMARY KEY (`p_doctor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 PACK_KEYS=0 COMMENT='医生登录表';

-- ----------------------------
-- Records of t_doctor_login
-- ----------------------------
INSERT INTO `t_doctor_login` VALUES ('1', '123', 'ICy5YqxZB1uWSwcVLSNLcA==');

-- ----------------------------
-- Table structure for t_mang_address
-- ----------------------------
DROP TABLE IF EXISTS `t_mang_address`;
CREATE TABLE `t_mang_address` (
  `p_maddress_id` int(4) NOT NULL,
  `p_maddress_name` varchar(30) CHARACTER SET gb2312 NOT NULL,
  `p_maddress_fid` int(4) DEFAULT NULL,
  `p_postcode` char(6) CHARACTER SET gb2312 DEFAULT NULL,
  `p_memo` text CHARACTER SET gb2312,
  `del` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`p_maddress_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_mang_address
-- ----------------------------
INSERT INTO `t_mang_address` VALUES ('1', '北京22', '8', '100012', '首都', '0');
INSERT INTO `t_mang_address` VALUES ('2', '济南', '6', '250100', '省城', '0');
INSERT INTO `t_mang_address` VALUES ('6', '上海', '13', '213', '22222', '0');
INSERT INTO `t_mang_address` VALUES ('7', '11', '212', '111', '22', '0');
INSERT INTO `t_mang_address` VALUES ('8', '嘎嘎嘎22', '12', '111', '111', '1');
INSERT INTO `t_mang_address` VALUES ('12', '上海', '13', '何恩惠', '12000', '1');

-- ----------------------------
-- Table structure for t_mang_hospital
-- ----------------------------
DROP TABLE IF EXISTS `t_mang_hospital`;
CREATE TABLE `t_mang_hospital` (
  `p_mhospital_id` int(4) unsigned zerofill NOT NULL,
  `p_mhospital_name` varchar(30) CHARACTER SET gb2312 NOT NULL,
  `p_mhospital_fid` int(4) unsigned zerofill DEFAULT NULL,
  `p_mcity` text CHARACTER SET gb2312,
  `p_memo` text CHARACTER SET gb2312,
  `del` int(4) DEFAULT '0',
  PRIMARY KEY (`p_mhospital_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_mang_hospital
-- ----------------------------
INSERT INTO `t_mang_hospital` VALUES ('0003', '军区医院', '0012', '北京', 'qqqqqq', '0');
INSERT INTO `t_mang_hospital` VALUES ('0004', '千佛山', '0002', '济南11', 'wwww', '0');
INSERT INTO `t_mang_hospital` VALUES ('0005', '22', null, null, '111', '0');
INSERT INTO `t_mang_hospital` VALUES ('0008', '省立医院东', '0001', '济南', 'eeeee', '0');
INSERT INTO `t_mang_hospital` VALUES ('0009', '省立西院', '0001', '济南', 'wwwww', '0');
INSERT INTO `t_mang_hospital` VALUES ('0012', '111', null, null, '111', '0');
INSERT INTO `t_mang_hospital` VALUES ('0013', '11', '0000', 'null', '11', '0');

-- ----------------------------
-- Table structure for t_mang_job
-- ----------------------------
DROP TABLE IF EXISTS `t_mang_job`;
CREATE TABLE `t_mang_job` (
  `p_mjob_id` int(4) NOT NULL,
  `p_mjob_name` varchar(30) CHARACTER SET gb2312 NOT NULL,
  `p_mjob_fid` int(4) NOT NULL,
  `p_memo` text CHARACTER SET gb2312,
  `del` int(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`p_mjob_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_mang_job
-- ----------------------------
INSERT INTO `t_mang_job` VALUES ('1', '公务员', '4', 'hhhhhhhhhhhhh', '0');
INSERT INTO `t_mang_job` VALUES ('2', '工人w', '6', '还不错1111', '0');
INSERT INTO `t_mang_job` VALUES ('3', '务农', '6', 'hiaemd', '1');
INSERT INTO `t_mang_job` VALUES ('4', '教师', '8', 'ttttttt', '0');
INSERT INTO `t_mang_job` VALUES ('5', '农民', '12', '主力军', '0');
INSERT INTO `t_mang_job` VALUES ('6', 'oo', '11', '11', '1');
INSERT INTO `t_mang_job` VALUES ('7', '护士', '12', '111', '0');

-- ----------------------------
-- Table structure for t_mang_major
-- ----------------------------
DROP TABLE IF EXISTS `t_mang_major`;
CREATE TABLE `t_mang_major` (
  `p_mmajor_id` int(4) NOT NULL,
  `p_mmajor_name` varchar(30) CHARACTER SET gb2312 NOT NULL,
  `p_mmajor_fid` int(4) DEFAULT NULL,
  `p_registfee_ratio` float(255,2) DEFAULT NULL,
  `p_memo` text CHARACTER SET gb2312,
  `del` int(4) DEFAULT '0',
  PRIMARY KEY (`p_mmajor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_mang_major
-- ----------------------------
INSERT INTO `t_mang_major` VALUES ('1', '护理', '6', '1.00', '这个不贵', '0');
INSERT INTO `t_mang_major` VALUES ('2', '临床', '8', '1.20', '这个好贵', '0');
INSERT INTO `t_mang_major` VALUES ('3', '护理', '10', '3.00', '恩ggg', '0');
INSERT INTO `t_mang_major` VALUES ('4', '临床', '8', '2.00', 'nnnnn', '0');
INSERT INTO `t_mang_major` VALUES ('5', 'huli', '8', '2.00', 'eeeeee', '0');
INSERT INTO `t_mang_major` VALUES ('6', '11', '111', null, '11', '0');
INSERT INTO `t_mang_major` VALUES ('7', '123', '111', null, '111', '0');
INSERT INTO `t_mang_major` VALUES ('8', '12', '222', '22.00', '1', '1');
INSERT INTO `t_mang_major` VALUES ('10', '11', '12', '11.00', '问你', '0');

-- ----------------------------
-- Table structure for t_mang_term
-- ----------------------------
DROP TABLE IF EXISTS `t_mang_term`;
CREATE TABLE `t_mang_term` (
  `p_mterm_id` int(4) NOT NULL,
  `p_mterm_name` varchar(30) CHARACTER SET gb2312 NOT NULL,
  `p_mterm_fid` int(4) DEFAULT NULL,
  `p_mterm_synid` int(4) DEFAULT NULL,
  `p_memo` text CHARACTER SET gb2312,
  PRIMARY KEY (`p_mterm_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_mang_term
-- ----------------------------

-- ----------------------------
-- Table structure for t_mang_title
-- ----------------------------
DROP TABLE IF EXISTS `t_mang_title`;
CREATE TABLE `t_mang_title` (
  `p_mtitle_id` int(4) NOT NULL,
  `p_mtitle_name` varchar(30) CHARACTER SET gb2312 NOT NULL,
  `p_mtitle_fid` int(11) DEFAULT NULL,
  `p_nomin_registfee` double(20,2) DEFAULT NULL,
  `p_memo` text CHARACTER SET gb2312,
  `del` int(4) DEFAULT '0',
  PRIMARY KEY (`p_mtitle_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_mang_title
-- ----------------------------
INSERT INTO `t_mang_title` VALUES ('1', '公务员', '8', '10.00', '测试1', '0');
INSERT INTO `t_mang_title` VALUES ('2', '护士', '6', '5.00', '好的', '0');
INSERT INTO `t_mang_title` VALUES ('3', '医生', '6', '8.00', '恩', '0');
INSERT INTO `t_mang_title` VALUES ('5', '医师', '12', '12.00', '22222', '0');
INSERT INTO `t_mang_title` VALUES ('6', '656', '66', '66.00', '12', '1');

-- ----------------------------
-- Table structure for t_mark_info
-- ----------------------------
DROP TABLE IF EXISTS `t_mark_info`;
CREATE TABLE `t_mark_info` (
  `p_mark_date` varchar(20) CHARACTER SET utf8 NOT NULL,
  `p_medical_no` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `p_mark_id` varchar(40) CHARACTER SET utf8 NOT NULL,
  `point_id` varchar(60) CHARACTER SET utf8 DEFAULT NULL,
  `p_mark_x` float(20,13) NOT NULL,
  `p_mark_y` float(20,13) NOT NULL,
  `p_mark_name` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `p_register_id` varchar(40) CHARACTER SET utf8 NOT NULL,
  `d_doctor_id` varchar(40) CHARACTER SET utf8 DEFAULT NULL,
  `image_id` varchar(40) CHARACTER SET utf8 NOT NULL,
  `tagtext` longtext CHARACTER SET utf8,
  `tagnum` int(50) DEFAULT NULL,
  PRIMARY KEY (`p_mark_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_mark_info
-- ----------------------------
INSERT INTO `t_mark_info` VALUES ('2015-12-27 14:50:35', null, '09dded57-c5b2-4e3a-98cc-57835591482d', 'label-1', '651.3286743164062', '432.4817504882812', null, 'b7a24200-e41d-46a2-945c-89417f8d9280', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '0feeed14-7197-46fb-8e51-b2c02d4216b3', '医生甲第一次标注', '1');
INSERT INTO `t_mark_info` VALUES ('2015-12-29 12:37:27', null, '7976a454-6b70-4a0e-9f1b-746fb0b926a0', 'label-1', '624.8120117187500', '203.7593994140625', null, 'ebdece31-184d-4ee6-84ce-c245acfc7402', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '49d8558a-d8a8-4c49-8d70-d03702463c90', '坎反反复复', '1');
INSERT INTO `t_mark_info` VALUES ('2015-12-29 12:36:52', null, 'a46e26f2-70e0-463a-9008-e756b637af9d', 'label-1', '567.6691894531250', '52.6315803527832', null, '473aeb05-7746-4e0c-be6b-821181cabe7b', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '94e7f23e-1ebd-4099-a185-b2410aa37f5e', '坎坎坷坷', '1');
INSERT INTO `t_mark_info` VALUES ('2015-12-29 12:36:19', null, 'c8471b3c-51ad-4929-a161-cb1b37131c02', 'label-1', '509.7744445800781', '349.6240539550781', null, '157d1117-8447-49b3-bf4b-876eb2f47e62', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '679ea005-3c9c-4ed3-93eb-4d81d74462a1', '斤斤计较', '1');
INSERT INTO `t_mark_info` VALUES ('2015-12-27 17:19:1', null, 'fb786ca1-9d6a-4ad0-99f2-947ec327b386', 'label-2', '408.2630004882812', '284.6715393066406', null, '3da7a916-7816-4f5c-a1e7-20438a176b99', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '0feeed14-7197-46fb-8e51-b2c02d4216b3', '甲的第二次标注', '1');

-- ----------------------------
-- Table structure for t_medical_info
-- ----------------------------
DROP TABLE IF EXISTS `t_medical_info`;
CREATE TABLE `t_medical_info` (
  `p_id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `p_medical_album` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `p_medical_no` int(4) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `p_transfer_date` varchar(10) NOT NULL,
  `p_produce_date` varchar(20) NOT NULL,
  `p_pages` int(3) DEFAULT NULL,
  `p_medical_type` varchar(16) DEFAULT NULL,
  `p_major` varchar(16) DEFAULT NULL,
  `p_low_dir` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`p_medical_no`),
  KEY `p_id` (`p_id`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=gb2312 PACK_KEYS=0 COMMENT='患者医学资料表';

-- ----------------------------
-- Records of t_medical_info
-- ----------------------------
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0040', '2015-11-29', '2015-11-04', '1', '体检报告-4', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0041', '2015-11-23', '2015-11-04', '1', '化验报告-2', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0042', '2015-11-23', '2015-11-02', '1', '病历-1', 'MR', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0043', '2015-11-23', '2015-11-17', '1', '化验报告-2', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0044', '2015-11-23', '2015-11-10', '1', '医学图像-3', 'BMP', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0045', '2015-11-23', '2015-10-29', '1', '医学图像-3', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0046', '2015-11-23', '2015-11-10', '1', '化验报告-2', 'BMP', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0047', '2015-11-23', '2015-10-29', '1', '医学图像-3', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0048', '2015-11-23', '2015-11-19', '1', '医学图像-3', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0051', '2015-11-29', '2015-11-11', '1', '医学图像-3', 'MR', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0052', '2015-12-03', '2015-12-02', '1', '病历-1', 'MR', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0053', '2015-12-03', '2015-12-02', '1', '医学图像-3', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('fa528b30-a36f-4224-81d4-ac803fd714ce', null, '0054', '2015-12-08', '2015-12-17', '1', '医学图像-3', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0080', '2015-11-23', '2015-10-30', '1', '体检报告-4', 'BMP', null);
INSERT INTO `t_medical_info` VALUES ('fa528b30-a36f-4224-81d4-ac803fd714ce', null, '0081', '2015-12-20', '2015-12-20', '1', '医学图像-3', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0082', '2015-12-23', '2015-12-09', '1', '化验报告-2', 'CT', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', null, '0083', '2015-12-23', '2015-12-10', '1', null, null, null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '骨科', '0084', '2015-12-26', '2015-12-03', '1', '医学图像-3', 'BMP', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '骨科', '0085', '2015-12-26', '2015-12-08', '1', '医学图像-3', 'MR', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '神经科', '0086', '2015-12-26', '2015-12-09', '1', '化验报告-2', 'MR', null);
INSERT INTO `t_medical_info` VALUES ('92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '精神科', '0087', '2015-12-28', '2015-12-16', '1', '化验报告-2', 'MR', null);
INSERT INTO `t_medical_info` VALUES ('0b01e316-1c9f-4e1c-a07f-d152c266846f', '神经科', '0088', '2015-12-29', '2015-12-16', '1', '化验报告-2', 'CT', null);

-- ----------------------------
-- Table structure for t_patient_info
-- ----------------------------
DROP TABLE IF EXISTS `t_patient_info`;
CREATE TABLE `t_patient_info` (
  `p_nickname` varchar(20) NOT NULL,
  `p_register_date` varchar(10) DEFAULT NULL COMMENT '注册日期',
  `p_id` varchar(36) CHARACTER SET gb2312 NOT NULL COMMENT '患者注册号',
  `password` varchar(60) NOT NULL,
  `p_PID` char(18) DEFAULT NULL COMMENT '省份证号',
  `p_name` char(10) DEFAULT NULL COMMENT '患者姓名',
  `p_birthday` varchar(10) DEFAULT NULL,
  `p_sex` char(8) CHARACTER SET gb2312 DEFAULT NULL COMMENT '性别',
  `p_job` char(10) DEFAULT NULL COMMENT '职业（来自职业表）',
  `p_province` char(10) DEFAULT NULL COMMENT '所在省',
  `p_city` char(16) DEFAULT NULL COMMENT '所在市',
  `p_district` char(16) DEFAULT NULL COMMENT '所在（市县）表',
  `p_address` varchar(30) DEFAULT NULL COMMENT '地址',
  `p_unit` varchar(50) DEFAULT NULL COMMENT '工作单位',
  `p_mobile` char(15) DEFAULT NULL COMMENT '手机',
  `p_email` char(20) DEFAULT NULL COMMENT 'EMAIL',
  `p_qq` char(10) DEFAULT NULL COMMENT 'QQ',
  `p_weixin` char(11) DEFAULT NULL COMMENT '微信',
  `p_r_id` char(7) DEFAULT NULL COMMENT '推荐人',
  `p_s_id` char(7) DEFAULT NULL COMMENT '配偶',
  `p_c_id` char(7) DEFAULT NULL COMMENT '子女',
  `p_f_id` char(7) DEFAULT NULL COMMENT '父亲',
  `p_m_id` char(7) DEFAULT NULL COMMENT '母亲',
  `p_b_id` char(7) DEFAULT NULL COMMENT '兄弟姐妹',
  `p_cl_id` char(7) DEFAULT NULL COMMENT '亲密朋友',
  `p_w_id` char(7) DEFAULT NULL COMMENT '病友',
  `del` int(11) NOT NULL DEFAULT '0' COMMENT '删除操作',
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='患者信息表（数据入口：患者注册界面）';

-- ----------------------------
-- Records of t_patient_info
-- ----------------------------
INSERT INTO `t_patient_info` VALUES ('hgq', '2015-12-23', '0b01e316-1c9f-4e1c-a07f-d152c266846f', 'ICy5YqxZB1uWSwcVLSNLcA==', '233115444444444444', '@但是', '2000-05-24', null, '护士', '山东省', '青岛市', '四方区', '机场', '北京博万', '21455555555', '12222@qq.com', '123', '2144', '123', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('222', '11', '111', '11', '22', '11', '11', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', '22', null, null, '0', '0', '0', '0', '0', '0', '1');
INSERT INTO `t_patient_info` VALUES ('123111', '2015-12-25', '18ae133c-231e-4be0-a844-fa5cee0b86bc', 'ICy5YqxZB1uWSwcVLSNLcA==', '111', '112', '2015-12-09', null, '公务员', '重庆市', '重庆市', '大渡口区', '11111111111', '1111', 'null', '2015-12-09', '111@qq.com', '123', '111', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('21340', '2015-12-29', '1acccc46-2d45-4db0-a9ba-a7b5b395f422', 'ICy5YqxZB1uWSwcVLSNLcA==', null, '123122', '2015-12-10', null, '工人w', '山东省', '青岛市', '崂山区', '3331', '32221', '12233333333', '2221@qq.com', null, '111', '', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('22231', '2015-12-25', '3df69643-1eb3-479e-a4d2-43cb2ae1c2a4', 'ICy5YqxZB1uWSwcVLSNLcA==', '111', '111111', '2015-12-09', null, '教师', '重庆市', '重庆市', '江北区', '1111', '2222', '11111111111', '123@qq.com', null, '111', '2133', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('12311', null, '41cb11b6-ee05-423a-8624-70d58b8ac05b', '123', null, '111', null, null, null, null, null, null, null, null, '1111111', '111@11.com', null, null, null, null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('11114c3', '2015-12-25', '456b77d0-6919-40a4-b409-93b8aa8ff8aa', 'yPPH/IDPm+Zuo732S6HILQ==', '11', '11231', '2015-12-15', null, '教师', '内蒙古', '赤峰市', '天义镇', '1122', '1111', '11111111111', '112@qq.com', null, '111', '1111', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('q1343', '2015-12-25', '64037228-a132-41bd-b05c-f0bd6209bdfd', 'ICy5YqxZB1uWSwcVLSNLcA==', '1111', '111111', '2015-12-09', null, '教师', '上海市', '上海市', '卢湾区', '111', '2222', '11111111111', '222@qq.com', null, '2132', '123', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('黑黑', '2015-12-09', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'ICy5YqxZB1uWSwcVLSNLcA==', '3213', '黑黑', '1994-01-01', '男', null, '北京', '北京', '朝阳', '山师', null, '11-5555-7777', '563454@qq.com', '24444', '123', '23', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('ww 1', '2015-12-25', '9b6da8e0-3b5a-4399-ad22-1eef4f6274b1', 'ICy5YqxZB1uWSwcVLSNLcA==', '11', '1111', '2015-12-03', null, '工人w', '上海市', '上海市', '静安区', '111', '111', '11111111111', '111@qq.com', null, '111', '1232', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('11114c', '2015-12-25', 'bfe0e49e-cb63-425a-9fe6-909d6e56f571', 'ICy5YqxZB1uWSwcVLSNLcA==', '11', '11231', '2015-12-15', null, '教师', '山西省', '阳泉市', '郊区', '1122', '1111', '11111111111', '112@qq.com', null, '111', '1111', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('123', '2015-12-25', 'c2e853f1-b259-4017-9ce0-ec8ddba2b919', 'aY1RoZ2KEhzlgUmde3AWaA==', '1111', '123', '2015-12-08', null, '农民', '天津市', '天津市', '和平区', '111', '111', '11111111111', '1111@qq.com', null, '123', '111', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('0213', '2015-12-29', 'c3062db6-136b-48f7-9271-cf603479c9a9', 'ICy5YqxZB1uWSwcVLSNLcA==', null, '2231', '2015-12-18', 'womaen', '农民', '山东省', '济南市', '槐荫区', '21eewwwq', '111', '12111111111', '1111111@qq.com', null, '1222111', '', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('12311111', '2015-12-25', 'e9d3340f-b260-4b16-adb0-4adbc063c9c0', 'ICy5YqxZB1uWSwcVLSNLcA==', '111', '1232', '2015-12-16', null, '公务员', '内蒙古', '呼伦贝尔市', '牙克石市', '111', '1111', '11111111111', '111@qq.com', null, '123', '123', null, null, null, null, null, null, null, '0');
INSERT INTO `t_patient_info` VALUES ('王富成', '2015-12-09', 'fa528b30-a36f-4224-81d4-ac803fd714ce', 'ICy5YqxZB1uWSwcVLSNLcA==', '8910', '王富成', '1993-12-23', '男', null, '山东', '济南', '长青', '山师的', null, '11-5555-8888', 'reee@qq.com', '444444', '2222', '22', null, null, null, null, null, null, null, '0');

-- ----------------------------
-- Table structure for t_patient_login
-- ----------------------------
DROP TABLE IF EXISTS `t_patient_login`;
CREATE TABLE `t_patient_login` (
  `id` int(11) NOT NULL,
  `p_id` int(7) NOT NULL COMMENT 'FK 注1：t_patient_info',
  `p_pwd` char(50) NOT NULL,
  PRIMARY KEY (`p_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 PACK_KEYS=0;

-- ----------------------------
-- Records of t_patient_login
-- ----------------------------

-- ----------------------------
-- Table structure for t_register_finish
-- ----------------------------
DROP TABLE IF EXISTS `t_register_finish`;
CREATE TABLE `t_register_finish` (
  `p_register_data` date NOT NULL,
  `p_id` varchar(40) NOT NULL,
  `p_register_id` char(14) NOT NULL,
  `p_doctor_id` int(7) NOT NULL,
  `p_register_finish` bit(1) NOT NULL DEFAULT b'1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 PACK_KEYS=0 COMMENT='医生预约取消——确认表';

-- ----------------------------
-- Records of t_register_finish
-- ----------------------------

-- ----------------------------
-- Table structure for t_register_info
-- ----------------------------
DROP TABLE IF EXISTS `t_register_info`;
CREATE TABLE `t_register_info` (
  `p_register_date` varchar(20) DEFAULT NULL,
  `p_register_id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `p_id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `d_doctor_id` varchar(255) CHARACTER SET utf8 NOT NULL,
  `p_medical_no` int(12) NOT NULL,
  `p_symptoms` char(200) CHARACTER SET gb2312 DEFAULT NULL,
  `p_markshow_yes` bit(1) NOT NULL DEFAULT b'1',
  `listno` varchar(100) NOT NULL,
  `p_register_status` char(14) CHARACTER SET gb2312 DEFAULT NULL,
  PRIMARY KEY (`p_register_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of t_register_info
-- ----------------------------
INSERT INTO `t_register_info` VALUES ('2015-12-28 21:28:34', '1181bf7e-fa36-4ab9-ba16-602f4d5e62d6', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已接受');
INSERT INTO `t_register_info` VALUES ('2015-12-28 21:28:51', '157d1117-8447-49b3-bf4b-876eb2f47e62', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '1', null, '', '[]', '已处理');
INSERT INTO `t_register_info` VALUES ('2015-12-28 21:28:37', '23204d27-72ee-4742-a5f9-42ca3393ba55', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已接受');
INSERT INTO `t_register_info` VALUES ('2015-12-29 13:39:48', '3a5a6c1b-7824-47ad-a106-fb02399fc4cd', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已接受');
INSERT INTO `t_register_info` VALUES ('2015-12-27 16:43:24', '3da7a916-7816-4f5c-a1e7-20438a176b99', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已处理');
INSERT INTO `t_register_info` VALUES ('2015-12-29 12:35:33', '473aeb05-7746-4e0c-be6b-821181cabe7b', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '1', null, '', '[]', '已处理');
INSERT INTO `t_register_info` VALUES ('2015-12-28 21:28:54', '67c252c1-e63e-4cde-a383-29af8b05bdff', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '1', null, '', '[]', '未处理');
INSERT INTO `t_register_info` VALUES ('2015-12-28 21:28:25', '6e9baabb-9c40-4d38-8974-58b3c094cbdd', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已拒绝');
INSERT INTO `t_register_info` VALUES ('2015-12-28 13:24:46', '81126908-b960-490e-b260-c3bd44b1129b', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '13764314-ffe7-4e89-8b43-bd49001cda28', '1', null, '', '[]', '未处理');
INSERT INTO `t_register_info` VALUES ('2015-12-28 13:11:34', '8734ff29-acb5-43f6-aba6-dc0a9ffc0ac9', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '66c6588c-8893-4630-bd89-7c753d490950', '1', null, '', '[]', '未处理');
INSERT INTO `t_register_info` VALUES ('2015-12-29 13:39:47', 'a94af5e4-d0ef-4d33-8a08-5b10120cf41c', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已接受');
INSERT INTO `t_register_info` VALUES ('2015-12-28 20:44:54', 'a9d56e7f-d8f0-4518-8de8-a7e2525d4982', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '2908eed4-65f6-411a-8a17-2cde99dfab96', '1', null, '', '[]', '未处理');
INSERT INTO `t_register_info` VALUES ('2015-12-29 13:39:43', 'afb33f4d-6aa5-484b-ac1f-35e1a5f5f2c2', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已接受');
INSERT INTO `t_register_info` VALUES ('2015-12-27 14:48:5', 'b7a24200-e41d-46a2-945c-89417f8d9280', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '已处理');
INSERT INTO `t_register_info` VALUES ('2015-12-29 13:39:45', 'dde4fbc6-3f81-454f-8261-dd5e7979a000', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f5a4e614-a0e2-4237-a4ee-9edf7be3f259', '1', null, '', '[]', '未处理');
INSERT INTO `t_register_info` VALUES ('2015-12-29 12:35:48', 'e07dd30e-616a-4728-912b-b6cb3eb11823', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '1', null, '', '[]', '未处理');
INSERT INTO `t_register_info` VALUES ('2015-12-29 12:35:40', 'ebdece31-184d-4ee6-84ce-c245acfc7402', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', 'f4a22b46-7da3-4310-a8a3-47c51bcbea43', '1', null, '', '[]', '已处理');
INSERT INTO `t_register_info` VALUES ('2015-12-28 13:24:43', 'f713f41b-a9f8-41aa-9012-0ed145e72ff4', '92e8cca5-866b-4e2e-968d-aa19d0eeb01f', '13764314-ffe7-4e89-8b43-bd49001cda28', '1', null, '', '[]', '未处理');
