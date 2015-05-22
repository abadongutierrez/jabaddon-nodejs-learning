var express = require('express');
var auth = require('basic-auth');

var app = express();

var before1 = function(req, res, next) {
  req.foo = 'bar';
  next();
};

var before2 = function(req, res, next) {
  res.header('X-Time', new Date().getTime());
  next();
};

app.get('/', before1, function(req, res) {
	res.send('Hello World! ' + req.foo);
});

app.get('/users/:id', [before1, before2], function(req, res) {
	res.send('user ' + req.params.id);
});

app.listen(3000);