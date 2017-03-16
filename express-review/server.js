var express = require('express');
var hbs = require('hbs');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
var greetingController = require('./controllers/greeting_controller.js');
app.use('/greeting', greetingController);

app.get('/', function(req, res) {
	res.send('Hello Friend!');
});

app.get('/math/:operator', function(req, res) {
	
	var mathResult = 0;
	if (req.params.operator === 'add') {
		   mathResult = parseInt(req.query.num1) + parseInt(req.query.num2);
		} else if (req.params.operator === 'subtract') {
		 	mathResult = parseInt(req.query.num1) - parseInt(req.query.num2);
		} else if (req.params.operator === 'multiply') {
		   mathResult = parseInt(req.query.num1) * parseInt(req.query.num2);
		} else if (req.params.operator === 'divide') {
		    mathResult = parseInt(req.query.num1) / parseInt(req.query.num2);
	    }
	
	    res.render('math', {

	    	data: mathResult
	    })
    });

		

app.get('/reverse/:word', function(req, res) {
	//var wordToReverse = (${req.params.word})
 console.log(req.params)
});



app.listen(3000);