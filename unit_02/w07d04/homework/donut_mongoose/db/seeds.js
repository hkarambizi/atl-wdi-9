//Require and connect  to mongoose and establish database with your chosen name after 'localhost/' 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/donut_store');

//We import and assign the 'models' from our schema file to variables in order to create instances below
var Donut = require('../models/donuts');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing donuts.
Donut.remove({}, function(err){
  console.log(err);
});


// Then, we create new Donut instances!
var sprinkles = new Donut({
	name: "Sprinkles",
	description: "A lotta sprinkles, a lotta yum.",
	img: "http://cdn.phillymag.com/wp-content/uploads/2013/09/donut.png",
	price: 5,
	qty: 99
});

var plain = new Donut({
name: "Plain Ole Donut",
description: "Plain donut for plain people.",
img: "https://grandmastersensei.files.wordpress.com/2009/06/donut.jpg",
price: 25,
qty: 15
});

var chocolate = new Donut({
name: "Chocolate",
description: "Chocolate Donut nom nom nom",
img: "https://deerfieldsbakery.com/images/items/Other/Pastries-Donuts-Chocolate-Iced-Glazed_MD.jpg",
price: 7000,
qty: 1
});

var donutholes = new Donut({
name: "Donut Holes",
description: "For the snackers.",
img: "http://sweets.seriouseats.com/images/20110313-142295-Dough-DonutHoles.jpg",
price: 10,
qty: 23
});


// save the donuts
sprinkles.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});

plain.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});

chocolate.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});

donutholes.save(function(err) {
  if (err) console.log(err);
  console.log('User created!');
});



