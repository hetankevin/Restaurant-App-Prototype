var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    console.log(req.url);
    switch (req.url) {
        case "/css/styles.css":
            fs.readFile('html/css/styles.css', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/css'});
                res.write(data);
                return res.end();
            });
            break;
        default:
            fs.readFile('html/index.html', function(err, data) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            });
    }

}).listen(8080);