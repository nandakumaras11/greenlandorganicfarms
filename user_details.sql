-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 28, 2023 at 08:20 PM
-- Server version: 10.2.44-MariaDB-cll-lve
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greenlan_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `user_id` int(10) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  `address` varchar(250) NOT NULL,
  `phone_no` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_details`
--

INSERT INTO `user_details` (`user_id`, `username`, `password`, `address`, `phone_no`) VALUES
(85, 'manu', '21232f297a57a5a743894a0e4a801fc3', 'aaa', '8848968203'),
(86, 'man', 'f13bb1bed03db9d68a7d9a48aafeec78', 'asss', '8848310248'),
(87, 'aaa', '698d51a19d8a121ce581499d7b701668', 'asdfg', '8111122222'),
(88, 'ab', '4124bc0a9335c27f086f24ba207a4912', 'yyy', '9876543210'),
(89, 'www', '5f4dcc3b5aa765d61d8327deb882cf99', 'www', '8129365304'),
(90, 'www', '5f4dcc3b5aa765d61d8327deb882cf99', 'www', '8129365304'),
(91, 'aaa', '47bce5c74f589f4867dbd57e9ca9f808', 'aa', '8111111111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
