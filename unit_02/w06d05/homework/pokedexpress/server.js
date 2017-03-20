//***************************
// REQUIREMENTS
//***************************
// Set up your express dependencies here:
var express = require('express');
var hbs = require('hbs');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var port = process.env.PORT || 3000;
//***************************
// MIDDLEWARE
//***************************
//set up your middleware and view engine here
app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public')); 
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
//***************************
// CONTROLLERS
//***************************
//set up your controller for the `/pokemon` resource
//ex: var pokemonController = require('???')
var pokemonController = require('./controllers/pokemon.js');
app.use('/pokemon', pokemonController);



//***************************
// LISTENER
//***************************
// Add a listener for port 3000:
app.listen(port, function() {

	console.log("Pokemon is listening on 3000!")
});