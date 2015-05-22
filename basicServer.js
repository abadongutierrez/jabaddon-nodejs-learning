var http = require('http');

var onRequest = function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World\n');
};

http.createServer(onRequest).listen(3000);
