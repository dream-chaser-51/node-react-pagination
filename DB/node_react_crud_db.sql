-- Adminer 4.7.6 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `master_entities`;
CREATE TABLE `master_entities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `master_entities` (`id`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(2,	'Product Entities 1',	'2021-12-21 17:19:29',	'2021-12-21 17:19:29',	NULL),
(3,	'Product Entities 2',	'2021-12-21 17:32:34',	'2021-12-21 17:32:34',	NULL),
(4,	'Product Entities 3',	'2021-12-22 19:54:58',	'2021-12-22 19:54:58',	NULL),
(5,	'Product Entities 4',	'2021-12-22 19:55:14',	'2021-12-22 19:55:14',	NULL);

DROP TABLE IF EXISTS `master_products`;
CREATE TABLE `master_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(100) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `brand` varchar(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `master_products` (`id`, `code`, `name`, `brand`, `category`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1,	'000000000010160633',	'Tp-Link 000000000010160633',	'Tp-Link',	'Hifi Systems',	'2021-12-22 11:40:27',	NULL,	NULL),
(2,	'000000000010166008',	'Tp-Link 000000000010166008',	'Tp-Link',	'Hifi Systems',	'2021-12-22 11:40:27',	NULL,	NULL),
(3,	'000000000010204541',	'Jlab Audio 000000000010204541',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(4,	'000000000010204543',	'Jlab Audio 000000000010204543',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(5,	'000000000010204610',	'Jlab Audio 000000000010204610',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(6,	'000000000010204613',	'Jlab Audio 000000000010204613',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(7,	'000000000010205905',	'Tp-Link 000000000010205905',	'Tp-Link',	'Hifi Systems',	'2021-12-22 11:40:27',	NULL,	NULL),
(8,	'000000000010208210',	'Jlab Audio 000000000010208210',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(9,	'000000000010208211',	'Jlab Audio 000000000010208211',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(10,	'000000000010208848',	'Jlab Audio 000000000010208848',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(11,	'000000000010208852',	'Jlab Audio 000000000010208852',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(12,	'000000000010219544',	'Marshall 000000000010219544',	'Marshall',	'Hifi Systems',	'2021-12-22 11:40:27',	NULL,	NULL),
(13,	'000000000010222588',	'Jlab Audio 000000000010222588',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(14,	'000000000010233275',	'Jlab Audio 000000000010233275',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(15,	'000000000010233278',	'Jlab Audio 000000000010233278',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(16,	'000000000010236550',	'Bang & Olufsen 000000000010236550',	'Bang & Olufsen',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(17,	'000000000010239613',	'Jlab Audio 000000000010239613',	'Jlab Audio',	'Headphones',	'2021-12-22 11:40:27',	NULL,	NULL),
(18,	'000000000010242573',	'Tp-Link 000000000010242573',	'Tp-Link',	'Hifi Systems',	'2021-12-22 11:40:27',	NULL,	NULL),
(19,	'000000000010253667',	'Toshiba 000000000010253667',	'Toshiba',	'Televisions',	'2021-12-22 11:40:27',	NULL,	NULL),
(20,	'000000000010253668',	'Toshiba 000000000010253668',	'Toshiba',	'Televisions',	'2021-12-22 11:40:27',	NULL,	NULL);

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `productId` int NOT NULL,
  `entitiesId` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `deletedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- 2021-12-22 16:19:03
