-- mysql에서 생성한 데이터베이스의 구체적인 내용을 정의하기 위한 파일!

-- Table structure for table `product`
CREATE TABLE `productdetail` (
    `id` INT NOT NULL AUTO_INCREMENT, -- NOT NULL: 반드시 입력하게 만듦, AUTO_INCREMENT: 자동으로 숫자 증가
    `productname` VARCHAR(20) NOT NULL,
    `price` VARCHAR(200) DEFAULT NULL,
    `description` VARCHAR(1000) NOT NULL,
    PRIMARY KEY (`id`)
);

-- Dumping data for table `product` :author_id에 해당하는 구체적 정보는 productlist 테이블에 저장(id,이름,프로필)
INSERT INTO `productdetail` (`productname`, `price`, `description`) VALUES ('축구공', '1000', '축구공 팔아요');
INSERT INTO `productdetail` (`productname`, `price`, `description`) VALUES ('농구공', '2000', '농구공 팔아요');
INSERT INTO `productdetail` (`productname`, `price`, `description`) VALUES ('배구공', '3000', '배구공 팔아요');
