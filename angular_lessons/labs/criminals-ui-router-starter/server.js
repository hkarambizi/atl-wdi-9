var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/criminals-app');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

var criminalsController = require('./controllers/criminals.js');
app.use('/api/criminals', criminalsController);

app.listen(process.env.PORT || 3000, function(){
	console.log('Youse a bitch!!!   Nah, Im kidding, youre cool. BTW your server is running');
});