//***************************
// REQUIREMENTS
//***************************
// Set up your express dependency here:
var express = require('express');
// Set express Router to a variable called router:
var router = express.Router();
// Let's export this router file at the bottom of the page:
// (Scroll to bottom to Exports)

// Require the poke_array.js file here from models.
// Save it to a variable called data:
var data = require('../models/poke_array.js');



//***************************
// READ
//***************************
// Note: All the routes below can be accessed at `localhost:3000/pokemon` + `resource`
// Make a GET route '/' that will render an index page of all pokemon images
router.get('/', function(req, res) {
	res.render('index', {
		data: data
	});
});


// Make a GET route '/new' that will simply render a form to create a new Pokemon
router.get('/new', function(req, res) {
	res.render('new')
});

// Make a GET route '/index/:index' that will render the Pokemon's show page at that :index
//
// Example: a user goes to 'localhost:3000/pokemon/index/0' in the browser and data for Bulbasaur (the pokemon at index 0) will be displayed.
router.get('/:index', function(req, res) {
	var pokemonIndex = data[req.params.index];
	res.render('show', {
		data: pokemonIndex
	});
});

router.get('/:index/edit', function(req, res) {
	res.render('edit', {
			name: data[req.params.index].name,
			id: req.params.index
		});
	});
//***************************
// CREATE
//***************************
//make a POST route '/' to create a New Pokemon
 router.post('/', function(req, res) {
 	var newPokemon = {
 		name: req.body.name,
 		img: req.body.img,
 		type: req.body.type,
 	};
 	data.push(newPokemon);
 	res.redirect('/pokemon')
 });

//***************************
// UPDATE
//***************************
router.put('/:index', function(req, res) {
  var pokeToEdit = data[req.params.index];

  pokeToEdit.name = req.body.name;
  pokeToEdit.img = req.body.img;
  pokeToEdit.type = req.body.type;
 
  id: req.params.index;
  res.redirect('/pokemon');
});


//***************************
// DELETE
//***************************
//make a DELETE route '/:index' that will delete the Pokemon at this index.

//delete
router.delete('/:index', function(req, res){
  data.splice(req.params.index, 1);
  res.redirect('/pokemon');
});


//***************************
// EXPORTS
//***************************
// use module.exports to export router:
module.exports = router;
// this makes the scripts on this page accessible by other files that "require" this file. Without exporting, the code in here just sits in here, alone.
