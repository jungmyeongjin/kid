// mysql을 동작시키기 위한 파일(연결, 데이터 표시 등)
/*
var mysql = require('mysql2'); // mysql 모듈을 mysql이라는 이름으로 사용하겠다. 
var connection = mysql.createConnection({ // DB접속 시 필요한 정보를 createconnection 메서드에 인수로 전달
    host     : 'localhost', // DB가 있는 서버 주소
    user     : 'nodejs', // 사용자 이름
    password : '111111',
    database : 'productlist' // 접속할 데이터베이스 이름
});

connection.connect(); // connection 변수를 이용해 connect 메서드를 호출해서 DB에 접속

connection.query('SELECT * from productdetail', function (error, results, fields) { //query 메서드로 DB에 질의문 전달. 
    if (error) {
        console.log(error);
    }
    console.log(results); // productdetail 테이블의 모든 데이터 읽어옴
});

connection.end(); // 작업 마쳤으면 접속 끊기*/


/*
var multer = require('multer');
var express = require('express');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: '111111',
    database: 'productlist'
});

app.use(express.static('public'));
app.use(express.json());

app.post('/upload', upload.single('productImage'), (req, res) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productDetail = req.body.productDetail;
    const productImage = req.file.path; // 이미지 파일 경로

    // 데이터베이스에 데이터 삽입
    const sql = `INSERT INTO productlist (productname, price, description, image) VALUES (?, ?, ?, ?)`;
    connection.query(sql, [productName, productPrice, productDetail, productImage], (err, result) => {
        if (err) {
            console.error('데이터 삽입 오류: ', err);
            res.status(500).json({ error: '데이터 삽입 오류' });
            return;
        }
        console.log('데이터 삽입 성공');
        // 삽입한 상품 정보를 클라이언트에 응답
        res.status(200).json({
            productName: productName,
            productPrice: productPrice,
            productImage: productImage
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});*/