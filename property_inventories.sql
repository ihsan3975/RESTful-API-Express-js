-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2019 at 04:20 PM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `property_inventories`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category`) VALUES
(1, 'Bed'),
(2, 'Sofa');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `id_category` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date_added` date NOT NULL,
  `date_updated` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `image`, `id_category`, `quantity`, `date_added`, `date_updated`) VALUES
(1, 'Casper 11', 'In Process', 'bed/casper11', 1, 30, '2018-11-07', '2019-08-29 17:00:00'),
(2, 'zinus 12', 'Registered', 'bed/zinus12', 1, 17, '2018-08-07', '2019-08-29 17:00:00'),
(3, 'Casper', 'Registered', 'c:/sofa/rivEM', 2, 8, '2019-01-04', '2019-08-30 07:30:11'),
(4, 'Airland 12', 'Unregistered', 'bed/airland12', 1, 39, '2019-07-27', '2019-08-30 03:20:59'),
(5, 'Florence 13', 'Registered', 'bed/florence12', 1, 100, '2012-07-27', '2019-08-30 03:22:00'),
(6, 'Zinus 13', 'Registered', 'bed/zinus13', 1, 20, '2015-07-27', '2019-08-30 03:22:39'),
(7, 'Hanzle', 'Registered', 'sofa/hanzle', 2, 25, '2016-07-27', '2019-08-30 03:23:56'),
(8, 'Airland 13', 'In Process', 'bed/airland', 1, 7, '2019-07-27', '2019-08-30 03:24:37'),
(9, 'Betafoam', 'Registered', 'sofa/betafoam', 2, 2, '2018-07-27', '2019-08-30 03:25:53'),
(10, 'Casper Foam 12', 'Unregisteres', 'bed/casper', 1, 2, '2019-07-27', '2019-08-30 03:27:05'),
(11, 'Graver LP 2296', 'Registered', 'chest/grav96', 3, 19, '2017-07-01', '2019-08-30 03:27:45'),
(12, 'Siantano 283SL', 'In Process', 'chest/sian83', 3, 12, '2019-07-01', '2019-08-30 03:28:47'),
(13, 'Siantano', 'In Process', 'chest/sian83', 3, 12, '2019-07-01', '2019-08-30 07:28:24');

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`id`, `full_name`, `email`, `password`) VALUES
(1, 'ihsan', 'ihsan@gmail.com', 'admin12'),
(2, 'irsyad', 'irsyad@gmail.com', 'admin123'),
(3, 'raka', 'raka@gmail.com', 'rakaraka');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `usertable`
--
ALTER TABLE `usertable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
