var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    host = '127.0.0.1',
    port = '9000';

var mimes = {
    '.html': 'text/html',
    '.htm': 'text/html',
    '.css': 'text/javascript',
    '.gif': 'image/gif',
    '.jpg': 'image/jpeg',
    '.png': 'image/png'
}

http.createServer(function(req, res) {
    console.log('Serving: ' + req.url);
    var filepath = req.url === '/' ? './index.html' : ('.' + req.url);
    var contentType = mimes[path.extname(filepath)];
    // Check if the file exists
    fs.exists(filepath, function(fileExist) {
        if (fileExist) {
            // Read the file and serve
            fs.readFile(filepath, function(err, fileContent) {
                if (err) {
                    res.writeHead(500); // server error
                    res.end();
                } else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    res.end(fileContent, 'utf-8');
                }
            });
        } else {
            res.writeHead(404); // file not found
            res.end('Sorry we could not find the file you requested!');
        }
    });
}).listen(port, host, function() {
    console.log('Server Running on http://' + host + ':' + port);
});
