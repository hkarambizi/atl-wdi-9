//THIS IS THE FIRST PLACE TO START WHEN BUILDING YOUR APP DATABASE:
//We must require (aka connect to) the mongoose library
//(Make sure you have NPM installed this and all other dependencies)
var mongoose = require('mongoose');

// Schemas are used to define attributes and structure our documents.
// Each Schema maps to a MongoDB collection and defines the shape of the documents within that collection.
var Schema = mongoose.Schema;

// Use native promises (NOT SURE WHY, BUT DO IT!!)
mongoose.Promise = global.Promise;

//Now we build the basic structure of our Schemas that we plan to create instances for. 
//These should look just like the examples of our Data Modeling HW (3.22.17) remember Senior Paws?
var DonutSchema = new Schema({
  name: String,
  description: String,
  img: String,
  price: Number,
  qty: Number
});

// Mongoose Models will represent documents in our database.
// .model() makes a copy of the schema. it is basically the constructor function
// The first argument is the singular name of the collection that your model is for. Mongoose automatically looks for the plural version of your model name.
// This means that the model name Donut will correspond to the donuts collection in the database.
var DonutModel = mongoose.model("Donut", DonutSchema);


// By adding `module.exports` to the bottom of our schema file, we can reference these models (or constructors) in other files by requiring `schema.js`.
module.exports = {
  Donut: DonutModel
};
