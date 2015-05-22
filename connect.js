var connect = require('connect');
var auth = require('basic-auth');
var app = connect();

app.use(function(req, res) {
	var credentials = auth(req);

	if (!credentials || credentials.name !== 'rafael' || credentials.pass !== 'secret') {
    	res.writeHead(401, {
      		'WWW-Authenticate': 'Basic realm="example"'
    	});
    	res.end();
  	} else {
    	res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello World\n');
  	}
});

app.listen(3000);