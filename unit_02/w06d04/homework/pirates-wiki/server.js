//your code here
var express = require('express');
var hbs = require('hbs');
var bodyParser = require('body-parser')
var app = express();

app.set("view engine", "hbs"); //tells Express what to use for rendering templates
app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);

var port = process.env.PORT || 3000; // tells the server where to listen for requests

app.listen(port, function() {
// tells the server where to listen for requests on port 3000

  console.log('hello-express is listening on port 3000');
}); // actualizing the line above