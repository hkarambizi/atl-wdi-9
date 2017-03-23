//Require and connect  to mongoose and establish database with your chosen name after 'localhost/' 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/auth');

//We import and assign the 'models' from our schema file to variables in order to create instances below
var User = require('../models/users');
var List = require('../models/lists');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing 
User.remove({}, function(err){
  console.log(err);
});

List.remove({}, function(err){
  console.log(err);
});
