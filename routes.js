// Export function and pass app and io instances from app.js

module.exports = function(app, io){
	
	// On '/', render home view
	app.get('/', function(req, res){
		res.render('home');
	});

	// On '/create', render user create view
	app.get('/create', function(req, res){
		res.render('create');
	});

	// On '/new', create new room
	app.get('/new', function(req, res){
		res.render('new');
	});

	// Initialize new socket.io
	 var room = io.on('connection', function(socket){

	});


}