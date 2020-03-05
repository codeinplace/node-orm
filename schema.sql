CREATE DATABASE `test`;

CREATE TABLE `test`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `address` TEXT NULL,
  `profile_id` INT DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
);

CREATE TABLE `test`.`profile` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `job_area` varchar(255) DEFAULT NULL,
  `picture_path` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `test`.`pessoa` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) DEFAULT NULL,
  `endereco` TEXT DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `test`.`fatura` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `data` DATETIME DEFAULT NULL,
  `valor` DECIMAL(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO
  `test`.`user` (`id`, `name`, `username`, `address`, `profile_id`, `created_at`)
VALUES
  (1, 'Jonathan Borges', 'jonathborg', 'Rua teste', NULL, NOW()),
  (2, 'Jonathan Rocha', 'jonathrocha', 'Rua alo 123', NULL, NOW()),
  (3, 'Daniel Lopes', 'dan.lopes', 'Rua hello world', NULL, NOW()),
  (4, 'Dimas', 'dimas', 'Rua lorem ipsum', NULL, NOW());

INSERT INTO
  `test`.`profile` (`id`, `job_area`, `picture_path`, `user_id`)
VALUES
  (1, 'fullstack', '/tmp/pictures/profile/1.jpg', 1),
  (2, 'fullstack', '/tmp/pictures/profile/2.jpg', 2),
  (3, 'frontend', '/tmp/pictures/profile/3.jpg', 3),
  (4, 'backend', '/tmp/pictures/profile/4.jpg', 4);

INSERT INTO
  `test`.`pessoa` (`id`, `nome`, `endereco`)
VALUES
  (1, 'fullstack', '/tmp/pictures/profile/1.jpg', 1),
  (2, 'fullstack', '/tmp/pictures/profile/2.jpg', 2),
  (3, 'frontend', '/tmp/pictures/profile/3.jpg', 3),
  (4, 'backend', '/tmp/pictures/profile/4.jpg', 4);

INSERT INTO
  `test`.`pessoa` (`id`, `name`, `endereco`)
VALUES
  (1, 'Jonathan Borges', 'somewhere'),
  (2, 'Jonathan Rocha', 'jonathrocha'),
  (3, 'Daniel Lopes', 'dan.lopes'),
  (4, 'Dimas', 'dimas');

INSERT INTO
  `test`.`fatura` (`id`, `data`, `valor`)
VALUES
  (1, '2020-01-05', 10025.25),
  (2, '2020-01-25', 11450.27),
  (3, '2020-03-02', 8125.40),
  (4, '2020-02-01', 100);
