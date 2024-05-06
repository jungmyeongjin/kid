var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response) {
    var url = request.url;
    if(request.url == '/') {
        url = '/main1.html';
    }
    if(request.url == '/main') {
        url = '/main2.html';
    }
    if(request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    if(request.url == '/post'){ // 
        url = '/post.html';
    }
    if (url.startsWith('/products/')) { //상세페이지 구현.여기서는 간단히 상품의 인덱스를 추출하여 사용합니다.
        var productId = url.split('/')[2];  // productId를 사용하여 상세 페이지를 구성하거나 필요한 처리를 수행합니다.
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(`Product Detail Page for Product ${productId}`);
    } else {
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + url));
    }
});
app.listen(3000);



/*

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// MySQL 연결 설정
const connection = mysql.createConnection({
    host     : 'localhost', // DB가 있는 서버 주소
    user     : 'nodejs', // 사용자 이름
    password : '111111',
    database : 'productlist' // 접속할 데이터베이스 이름
});

connection.connect();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/upload', (req, res) => {
    const productName = req.body.productName;
    const productPrice = req.body.productPrice;
    const productDescription = req.body.productDescription;

    const sql = "INSERT INTO productdetail (productname, price, description) VALUES (?, ?, ?)";
    connection.query(sql, [productName, productPrice, productDescription], (err, result) => {
        if (err) {
            console.error('Error inserting into database:', err);
            res.sendStatus(500);
            return;
        }
        console.log("1 record inserted");
        // 상품을 업로드한 후, 사용자를 다시 상품 목록 페이지로 리디렉션하지 않고 홈페이지로 리다이렉션합니다.
        res.redirect('/');
    });
});

app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId;
    // 여기서는 간단히 상품의 인덱스를 추출하여 사용합니다.
    // productId를 사용하여 상세 페이지를 구성하거나 필요한 처리를 수행합니다.
    // 예: 해당 상품의 정보를 데이터베이스에서 가져와서 응답합니다.
    res.send(`Product Detail Page for Product ${productId}`);
});

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
*/