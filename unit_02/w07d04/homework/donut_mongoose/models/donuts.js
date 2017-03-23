// This is the second step when building your database. 
// In order to connect the Schema to the seeds, you will 
// create the below bridge to import(require) and export(module.export) data
//from schema.js
var Schema = require("../db/schema");
var mongoose = require('mongoose');

var Donut = Schema.Donut;
module.exports = Donut;
//export your donut with module.exports()
