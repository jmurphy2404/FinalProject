// Export function and pass app and io instances from app.js

module.exports = function(app, io){
	// On '/', render home view
	app.get('/', function(req, res){
		res.render('home');
	});
}