-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Сен 25 2023 г., 20:21
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `lug`
--

-- --------------------------------------------------------

--
-- Структура таблицы `clients`
--

CREATE TABLE `clients` (
  `id` int NOT NULL,
  `phone_number` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL DEFAULT '0',
  `points` int NOT NULL DEFAULT '0',
  `total_purchase` decimal(10,0) NOT NULL DEFAULT '0',
  `reg_date` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `clients`
--

INSERT INTO `clients` (`id`, `phone_number`, `name`, `points`, `total_purchase`, `reg_date`) VALUES
(1, '79888543', 'Сергей', 0, '0', 1695641983857),
(2, '89181234567', 'Василий', 0, '0', 1695642092216),
(3, '79880987654', 'Иван', 0, '0', 1695642109996),
(4, '8432', 'Соха', 0, '0', 1695642121446);

-- --------------------------------------------------------

--
-- Структура таблицы `purchases`
--

CREATE TABLE `purchases` (
  `id` int NOT NULL,
  `client_id` int NOT NULL,
  `purchase_date` bigint NOT NULL,
  `sum_purchase` decimal(10,2) NOT NULL,
  `operation_type` enum('PLUS','SUB') COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'PLUS',
  `sub_bonus` decimal(10,2) DEFAULT NULL,
  `list_purchase` text COLLATE utf8mb4_general_ci,
  `salesman` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `purchases`
--

INSERT INTO `purchases` (`id`, `client_id`, `purchase_date`, `sum_purchase`, `operation_type`, `sub_bonus`, `list_purchase`, `salesman`) VALUES
(1, 4, 1695642376661, '2000.00', 'PLUS', '0.00', 'Цветы большие, Ромашки', 'Таня'),
(3, 4, 1695647530772, '2000.00', 'SUB', '100.00', 'Цветы большие, Ромашки', 'Таня');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `purchases`
--
ALTER TABLE `purchases`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `clients`
--
ALTER TABLE `clients`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `purchases`
--
ALTER TABLE `purchases`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `purchases`
--
ALTER TABLE `purchases`
  ADD CONSTRAINT `purchases_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `clients` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
