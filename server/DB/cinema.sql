-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 01, 2021 at 07:19 PM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cinema`
--

-- --------------------------------------------------------

--
-- Table structure for table `film`
--

CREATE TABLE `film` (
  `id` int(11) NOT NULL,
  `nom` varchar(30) DEFAULT NULL,
  `realisateur` varchar(30) DEFAULT NULL,
  `genre` varchar(30) DEFAULT NULL,
  `annee` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `film`
--

INSERT INTO `film` (`id`, `nom`, `realisateur`, `genre`, `annee`) VALUES
(1, 'film1', 'realisateur1', 'genre1', 2001),
(2, 'film2', 'realisateur1', 'genre1', 2010),
(3, 'film3', 'realisateur2', 'genre2', 2001),
(4, 'film4', 'realisateur2', 'genre2', 2011),
(5, 'film5', 'realisateur3', 'genre3', 2007),
(6, 'film6', 'realisateur2', 'genre1', 2016),
(7, 'film7', 'realisateur2', 'genre1', 2001),
(8, 'film7', 'realisateur3', 'genre3', 2005),
(9, 'film10', 'realisateur2', 'genre5', 2017),
(10, 'Zerai', 'tyu', 'drama1', 2001);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `film`
--
ALTER TABLE `film`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `film`
--
ALTER TABLE `film`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
