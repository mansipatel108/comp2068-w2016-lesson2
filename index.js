var http = require('http');
var hostname = '127.0.0.1';
var port = 8080;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Conntent-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port);
});
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port, hostname, function () {
});
//# sourceMappingURL=index.js.map