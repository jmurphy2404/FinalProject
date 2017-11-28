// Require and initialize express
var express = require('express'),
	app = express();

// Heroku setup/port assignment
var port = process.env.PORT || 8080;

// Require and initialize socket.io object bound to express app
var io = require('socket.io').listen(app.listen(port));

// Tie in require and config files, pass app and io through
require('./config')(app, io);
require('./routes')(app, io);

console.log('Your application is running on http://localhost:' + port);