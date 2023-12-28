-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 03:54 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `green_nest_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `address_details`
--

CREATE TABLE `address_details` (
  `address_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `address` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `address_details`
--

INSERT INTO `address_details` (`address_id`, `user_id`, `address`) VALUES
(2, 93, 'rose villa tvm p.o thiuvanandhapuram'),
(3, 94, 'abu bavan kollam'),
(4, 94, 'mani bhavan kottaram veedu  kottayam');

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(50) NOT NULL,
  `image` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`gallery_id`, `image`, `status`) VALUES
(3, '486373171bdc7fdf4394c3a646620f17.webp', 0),
(5, '36fd38f163ceb0c6d1596ee7fe73e405.webp', 0),
(6, 'ad292457622ae1022e70d1701195f4d0.webp', 0);

-- --------------------------------------------------------

--
-- Table structure for table `order_details`
--

CREATE TABLE `order_details` (
  `order_id` int(20) NOT NULL,
  `user_id` int(20) NOT NULL,
  `product_id` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `totalAmount` int(50) NOT NULL,
  `dateOfOrder` varchar(20) NOT NULL,
  `transaction_id` varchar(50) NOT NULL,
  `status` varchar(20) NOT NULL,
  `paymentMode` varchar(50) NOT NULL,
  `orderMessage` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_details`
--

INSERT INTO `order_details` (`order_id`, `user_id`, `product_id`, `totalAmount`, `dateOfOrder`, `transaction_id`, `status`, `paymentMode`, `orderMessage`) VALUES
(302, 98, '[{\"product_id\":\"11\",\"quantity\":1}]', 599, '01-11-2023 22:40:23', '0', 'TXN_SUCCESS', 'cod', ''),
(303, 99, '[{\"product_id\":\"8\",\"quantity\":3}]', 99, '01-11-2023 22:45:25', '0', 'TXN_SUCCESS', 'cod', ''),
(304, 99, '[{\"product_id\":\"8\",\"quantity\":2},{\"product_id\":\"6\",\"quantity\":1},{\"product_id\":\"9\",\"quantity\":2}]', 697, '01-11-2023 22:55:37', '0', 'TXN_SUCCESS', 'cod', '');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(50) NOT NULL,
  `category` varchar(20) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `old_price` int(50) NOT NULL,
  `selling_price` int(50) NOT NULL,
  `product_img` varchar(250) NOT NULL,
  `description` longtext CHARACTER SET utf8 NOT NULL,
  `product_tags` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `stock` varchar(20) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `category`, `product_name`, `old_price`, `selling_price`, `product_img`, `description`, `product_tags`, `stock`, `status`) VALUES
(6, 'plantcares', 'Lucky Bamboo Plant - 3 Layer', 499, 399, 'd0d7d8a0fb9598c3e92b8b80e35193f9.jpg', 'One of the luckiest plants according to Feng Shui is the Lucky Bamboo 3 Layer plant. This easy to grow and inexpensive plant is a popular choice of plant to keep at homes or offices. An excellent and easy to maintain gifting option that is said to br', '[\"PLASTIC_PLANTERS\",\"FLOWER_SEEDS\",\"VEGETABLE_SEEDS\",\"MICROGREEN_SEEDS\"]', '0', 0),
(8, 'planters', 'Brinjal Banarshi Giant Seeds', 145, 99, '98498fdd5a0ec6f7004d8e680c628ac4.webp', 'Round, purple, hardy, delicious and full of nutrients, we are talking about the Brinjal Banarshi. It is known in Indian homes as the “Bharte wala baingan” This low calorie vegetable belongs to the nightshade family of vegetables. With a well-drained ', '[\"PLASTIC_PLANTERS\",\" CERAMIC_PLANTERS\",\"METAL_PLANTERS\",\"HANGING_PLANTERS\",\"PLANT_STANDS\",\"FLOWER_SEEDS\",\"VEGETABLE_SEEDS\",\"MICROGREEN_SEEDS\"]', '0', 0),
(9, 'plantcares', 'Epsom Salt - 1 kg', 299, 199, 'ebde2485b2e6379d7603d24f03684e78.webp', 'Epsom salt is a magnesium sulphate compound is used extensively to help ornamental flowering plants bloom more profusely and achieve greener and bushier foliage. Made of hydrated magnesium and sulfur, it is essential to healthy plant growth and green', '[\"POTTING_MIX_AND_FERTILISERS\"]', '0', 0);

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
(89, 'www', '5f4dcc3b5aa765d61d8327deb882cf99', 'Test adddress dummy', '8129365304'),
(90, 'www', '5f4dcc3b5aa765d61d8327deb882cf99', 'www', '8129365304'),
(91, 'aaa', '47bce5c74f589f4867dbd57e9ca9f808', 'aa', '8111111111'),
(92, 'manu', '698d51a19d8a121ce581499d7b701668', 'sadsd', '9888888888'),
(93, 'Aravind A S', 'be1b0f5a727313b11ccb54b54fb45b4a', 'sreenandanam muthupilakkadu muthupilakkafu po kollam', '8848310248'),
(94, 'test', 'f925916e2754e5e03f75dd58a5733251', '345678', '9876543210'),
(95, 'Subhash', '45483b9fb1624a0ec76c8a8742dbc10e', 'Ndjdjdj', '9544368381'),
(96, 'Subbu', '45483b9fb1624a0ec76c8a8742dbc10e', 'Shhhfg', '9544368381'),
(97, 'Subbu', '45483b9fb1624a0ec76c8a8742dbc10e', 'Subhasgfxd', '9544368381'),
(99, 'sunkudu', '00b8dd892394cf31c2be755ac797b636', 'addr', '7845126230');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address_details`
--
ALTER TABLE `address_details`
  ADD PRIMARY KEY (`address_id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`gallery_id`);

--
-- Indexes for table `order_details`
--
ALTER TABLE `order_details`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address_details`
--
ALTER TABLE `address_details`
  MODIFY `address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `order_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=305;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
