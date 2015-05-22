var express = require('express');
var auth = require('basic-auth');

var app = express();

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/users/:id', function(req, res) {
	res.send('user ' + req.params.id);
});

app.get('/auth', function(req, res) {
	var credentials = auth(req);
	if (!credentials || credentials.name !== 'rafael' || credentials.pass !== 'secret') {
    	res.writeHead(401, {
      		'WWW-Authenticate': 'Basic realm="example"'
    	});
    	res.end();
  	} else {
    	res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Access granted\n');
  	}
});

app.listen(3000);