-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 06, 2023 at 05:44 PM
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
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `gallery_id` int(50) NOT NULL,
  `image` varchar(250) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
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
(195, 35, '[{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":4}]', 1596, '25-06-2023 12:04:31', '', 'pending', 'Online', ''),
(196, 35, '[{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":4}]', 1596, '25-06-2023 13:02:09', '0', 'TXN_SUCCESS', 'cod', ''),
(197, 35, '[{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":1}]', 399, '25-06-2023 13:29:57', '0', 'TXN_SUCCESS', 'cod', ''),
(198, 91, '[{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":1},{\"product_id\":\"7\",\"price\":\"299\",\"quantity\":1}]', 698, '25-06-2023 13:32:09', '0', 'TXN_SUCCESS', 'cod', ''),
(199, 91, '[{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":1}]', 399, '25-06-2023 13:32:30', '', 'pending', 'Online', ''),
(200, 92, '[{\"product_id\":\"8\",\"price\":\"99\",\"quantity\":1}]', 99, '28-06-2023 21:23:00', '', 'pending', 'Online', ''),
(201, 92, '[{\"product_id\":\"8\",\"price\":\"99\",\"quantity\":1}]', 99, '28-06-2023 21:23:31', '0', 'TXN_SUCCESS', 'cod', ''),
(202, 89, '[{\"product_id\":\"7\",\"price\":\"299\",\"quantity\":1},{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":1}]', 698, '02-07-2023 10:16:43', '0', 'TXN_SUCCESS', 'cod', ''),
(203, 89, '[{\"product_id\":\"13\",\"price\":\"99\",\"quantity\":1}]', 99, '02-07-2023 10:17:02', '0', 'TXN_SUCCESS', 'cod', ''),
(204, 89, '[{\"product_id\":\"13\",\"price\":\"99\",\"quantity\":1}]', 99, '02-07-2023 10:17:03', '0', 'TXN_SUCCESS', 'cod', ''),
(205, 93, '[{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":1}]', 399, '04-07-2023 16:17:28', '', 'pending', 'Online', ''),
(206, 93, '[{\"product_id\":\"6\",\"price\":\"399\",\"quantity\":1}]', 399, '04-07-2023 16:17:53', '0', 'TXN_SUCCESS', 'cod', ''),
(207, 93, '[{\"product_id\":\"9\",\"price\":\"199\",\"quantity\":2}]', 398, '04-07-2023 16:18:14', '0', 'TXN_SUCCESS', 'cod', ''),
(208, 93, '[{\"product_id\":\"10\",\"price\":\"699\",\"quantity\":1}]', 699, '05-07-2023 16:42:51', '', 'pending', 'Online', '');

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
  `description` varchar(250) NOT NULL,
  `product_tags` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `stock` varchar(20) DEFAULT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `category`, `product_name`, `old_price`, `selling_price`, `product_img`, `description`, `product_tags`, `stock`, `status`) VALUES
(5, 'plants', 'Zuri Planter Ball Rib', 899, 699, 'ede7b7b64bb904b88d84f2d57112898c.webp', 'The perfect shape and size for easy handling and livening up your indoor garden. The Planter Ball Rib is made of fibre that is both durable and lightweight for home gardeners. The surface has a textured ribbed finish to give it depth and a layer of i', '[\"FLOWER_SEEDS\",\"MICROGREEN_SEEDS\",\"HERD_SEEDS\",\"FRUIT_SEEDS\"]', '0', 0),
(6, 'plants', 'Lucky Bamboo Plant - 3 Layer', 499, 399, 'd9feaf6d4d4e1819a76009dbb5e46e4e.webp', 'One of the luckiest plants according to Feng Shui is the Lucky Bamboo 3 Layer plant. This easy to grow and inexpensive plant is a popular choice of plant to keep at homes or offices. An excellent and easy to maintain gifting option that is said to br', '[\"INDOOR_PLANTS\",\"AIRPURIFYING_PLANTS\",\"HANGING_PLANTS\",\"NEW_ARRIVALS\",\"BALCON\",\"LIVING_ROOM\"]', '0', 0),
(7, 'plants', 'Money Plant Golden', 499, 299, '81ba1375b3b4f66d960ca28073282711.webp', 'A darling of home gardeners everywhere, the Money Plant Golden is famous for its never give up attitude. This plant can survive neglect and adapt to almost all growing conditions to fill your space with trailing foliage of bright golden-green coloure', '[\"INDOOR_PLANTS\",\"LOW_LIGHTPLANTS\",\"BUNDLES\",\"HANGING_PLANTS\",\"NEW_ARRIVALS\",\"BALCON\"]', '0', 0),
(8, 'seeds', 'Brinjal Banarshi Giant Seeds', 145, 99, '98498fdd5a0ec6f7004d8e680c628ac4.webp', 'Round, purple, hardy, delicious and full of nutrients, we are talking about the Brinjal Banarshi. It is known in Indian homes as the “Bharte wala baingan” This low calorie vegetable belongs to the nightshade family of vegetables. With a well-drained ', '[\" VEGETABLE_SEEDS\",\"MICROGREEN_SEEDS\",\"NEW_ARRIVALS\"]', '0', 0),
(9, 'plantcares', 'Epsom Salt - 1 kg', 299, 199, 'ebde2485b2e6379d7603d24f03684e78.webp', 'Epsom salt is a magnesium sulphate compound is used extensively to help ornamental flowering plants bloom more profusely and achieve greener and bushier foliage. Made of hydrated magnesium and sulfur, it is essential to healthy plant growth and green', '[\"FLOWER_SEEDS\",\"MICROGREEN_SEEDS\",\"BEST_SELLER\"]', '0', 0),
(10, 'plantcares', 'Vermicompost - 10 kg', 999, 699, '2a79162ba06b34bcbdd18e3fc5666d90.webp', 'Vermicompost is made by breaking down the organic material through the use of worms. Vermicompost improves biological, chemical, and physical properties of the soil. The worms break down soil and organic matter, so the nutrients are immediately avail', '[\"FLOWER_SEEDS\",\" VEGETABLE_SEEDS\",\"FLOWER_BULBS\",\"BEST_SELLER\"]', '0', 0),
(11, 'planters', 'Argyle Ceramic Pot (6.2 Inch Diameter)', 899, 599, '650f87b45e42e8e13662c1ad50e838b3.webp', 'A sophisticated premium grade ceramic planter with intricate surface details to add depth and texture to your home garden. The planter has a weighted base with a drainage hole to facilitate proper drainage of extra water. Its glossy glaze and chic fi', '[\"FLOWER_SEEDS\",\"HERD_SEEDS\",\"BEST_SELLER\"]', '0', 0),
(12, 'planters', 'Marmelos White Panel', 70000, 6749, '572c2ff13d984a6931bae3fe87b74814.webp', 'A sophisticated premium grade ceramic planter with intricate surface details to add depth and texture to your home garden. The planter has a weighted base with a drainage hole to facilitate proper drainage of extra water. Its glossy glaze and chic fi', '[\" VEGETABLE_SEEDS\",\"HERD_SEEDS\",\"FRUIT_SEEDS\",\"FRUIT_SEEDS\",\"BEST_SELLER\"]', '0', 0),
(13, 'seeds', 'Brinjal Giant Seeds', 145, 99, '98498fdd5a0ec6f7004d8e680c628ac4.webp', 'Round, purple, hardy, delicious and full of nutrients, we are talking about the Brinjal Banarshi. It is known in Indian homes as the “Bharte wala baingan” This low calorie vegetable belongs to the nightshade family of vegetables. With a well-drained ', '[\" VEGETABLE_SEEDS\",\"MICROGREEN_SEEDS\",\"NEW_ARRIVALS\"]', '0', 0),
(14, 'seeds', 'Brinjal Banarshi Giant Seeds', 145, 99, '98498fdd5a0ec6f7004d8e680c628ac4.webp', 'Round, purple, hardy, delicious and full of nutrients, we are talking about the Brinjal Banarshi. It is known in Indian homes as the “Bharte wala baingan” This low calorie vegetable belongs to the nightshade family of vegetables. With a well-drained ', '[\" VEGETABLE_SEEDS\",\"MICROGREEN_SEEDS\",\"NEW_ARRIVALS\"]', '0', 0);

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
(89, 'www', '5f4dcc3b5aa765d61d8327deb882cf99', 'test order', '8129365304'),
(90, 'www', '5f4dcc3b5aa765d61d8327deb882cf99', 'www', '8129365304'),
(91, 'aaa', '47bce5c74f589f4867dbd57e9ca9f808', 'aa', '8111111111'),
(92, 'manu', '698d51a19d8a121ce581499d7b701668', 'sadsd', '9888888888'),
(93, 'Aravind A S', 'be1b0f5a727313b11ccb54b54fb45b4a', 'sreenandanam muthupilakkadu muthupilakkafu po kollam', '8848310248');

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `gallery_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `order_details`
--
ALTER TABLE `order_details`
  MODIFY `order_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=209;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `user_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
