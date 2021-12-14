-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-12-2021 a las 21:23:17
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bddata`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departments`
--

CREATE TABLE `departments` (
  `id` int(11) NOT NULL,
  `deparmentName` varchar(35) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `departments`
--

INSERT INTO `departments` (`id`, `deparmentName`, `timestamp`, `createdAt`, `updatedAt`) VALUES
(1, 'Tecnologia', '2021-12-13 21:18:58', '2021-12-13 21:18:58', '2021-12-13 21:18:58'),
(2, 'Recursos humanos', '2021-12-13 21:18:58', '2021-12-13 21:18:58', '2021-12-13 21:18:58'),
(3, 'Produccion', '2021-12-13 21:19:01', '2021-12-13 21:19:01', '2021-12-13 21:19:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `employeeName` varchar(25) NOT NULL,
  `employeeLastName` varchar(25) NOT NULL,
  `departmentId` int(11) NOT NULL,
  `studyId` int(11) NOT NULL,
  `sexo` tinyint(4) NOT NULL,
  `idNumber` varchar(14) NOT NULL,
  `address` varchar(200) NOT NULL,
  `homePhone` varchar(12) NOT NULL,
  `mobilePhone` varchar(12) NOT NULL,
  `baseSalary` decimal(12,2) NOT NULL,
  `discount` decimal(12,2) NOT NULL,
  `netSalary` decimal(12,2) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`id`, `employeeName`, `employeeLastName`, `departmentId`, `studyId`, `sexo`, `idNumber`, `address`, `homePhone`, `mobilePhone`, `baseSalary`, `discount`, `netSalary`, `createdAt`, `updatedAt`) VALUES
(8, 'Anel ', 'Dominguez ', 1, 1, 0, '40226009294', 'Calle Primera San Cristobal Republica dominicana', '8299436531', '8299436531', '60000.00', '8300.00', '52478.00', '2021-12-14 16:20:26', '2021-12-14 19:44:11'),
(9, 'Maria ', 'Soto', 3, 1, 1, '00292837461', 'Calle Diego Tristan casi esq.la pista', '8299436531', '8299436531', '60000.00', '2300.00', '57300.00', '2021-12-14 19:29:34', '2021-12-14 19:42:55'),
(12, 'Ange', 'Dominguez', 1, 2, 1, '00292837464', 'Calle Primera San Cristobal Republica dominicana', '8299436531', '8299436531', '60000.00', '8300.00', '52478.00', '2021-12-14 19:50:37', '2021-12-14 19:50:37');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `studies`
--

CREATE TABLE `studies` (
  `id` int(11) NOT NULL,
  `secuenceId` int(11) NOT NULL,
  `studyName` varchar(35) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `studies`
--

INSERT INTO `studies` (`id`, `secuenceId`, `studyName`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'Anel', '2021-12-13 21:20:02', '2021-12-13 21:20:02'),
(2, 2, 'Gabriel', '2021-12-13 21:20:02', '2021-12-13 21:20:02'),
(3, 1, 'Jose', '2021-12-13 21:20:04', '2021-12-13 21:20:04');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deparmentId` (`departmentId`),
  ADD KEY `studyId` (`studyId`);

--
-- Indices de la tabla `studies`
--
ALTER TABLE `studies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `departments`
--
ALTER TABLE `departments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `studies`
--
ALTER TABLE `studies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `employees_ibfk_1` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`),
  ADD CONSTRAINT `employees_ibfk_2` FOREIGN KEY (`studyId`) REFERENCES `studies` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
