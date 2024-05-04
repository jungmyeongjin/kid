var http = require('http');
var fs = require('fs');

var app = http.createServer(function(request, response) {
    var url = request.url;
    if(request.url == '/') {
        url = '/index.html';
    }
    if(request.url == '/favicon.ico') {
        return response.writeHead(404);
    }
    if (url.startsWith('/products/')) {
      // 여기서는 간단히 상품의 인덱스를 추출하여 사용합니다.
      var productId = url.split('/')[2];
      // productId를 사용하여 상세 페이지를 구성하거나 필요한 처리를 수행합니다.
      // 예: 해당 상품의 정보를 데이터베이스에서 가져와서 응답합니다.
      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end(`Product Detail Page for Product ${productId}`);
  } else {
        response.writeHead(200);
        response.end(fs.readFileSync(__dirname + url));
  }
});
app.listen(3000);
