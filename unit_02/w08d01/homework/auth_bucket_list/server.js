var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var methodOverride = require('method-override');
var logger = require('morgan');
var hbs = require('hbs');
var mongoose = require('mongoose');
var pry = require('pryjs')



var usersController = require('./controllers/usersController.js');
var sessionsController = require('./controllers/sessionsController.js');
// require the list controller here
var listsController = require('./controllers/listsController.js');


var app = express();

mongoose.connect('mongodb://localhost/auth');

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use(session({
  secret: "derpderpderpcats",
  resave: false,
  saveUninitialized: false
}));

app.use('/users', usersController);
app.use('/sessions', sessionsController);
//add the third app.use here (check readme for which route)
app.use('/users/:userId/lists', listsController);



app.listen(4000, function() {
  console.log('Yah BISH! We are live and direct muh fuh!');
});
