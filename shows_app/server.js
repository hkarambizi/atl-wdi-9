var express = require('express'); // Loading the express module on our server
var app = express(); // Create a new instance of express on our server
var hbs = require('hbs'); // loads handlebars

app.set("view engine", "hbs"); //tells Express what to use for rendering templates
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.get('/', function(req, res) { // when a request comes in at localhost:3000/ it will respond
});

app.get('/shows', function(req, res) { // when a request comes in at localhost:3000/ it will respond
	var faveShows = [" House of Cards on Netflix"," Parks and Recreation on NBC"," Silicon Valley on HBO", " The OA on Netflix", " Happy Endings on ABC", " Broad City on Comedy Central", " Master of None on Netflix", " Arrested Development on FOX"]

	res.render('harrys-shows', {
      data: faveShows
    });
});
var port = process.env.PORT || 3002; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3002');
}); // actualizing the line above