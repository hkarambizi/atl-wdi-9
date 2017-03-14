// app.js

//require express package
var express = require('express');
//save an express module as 'app'
var app     = express();
// assigning 3000 as our port
var port    = 3000;
var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');
app.use(express.static(__dirname + '/public'));

//route for home
app.get('/', function(req, res) {
	var welcomeMessage = "Welcome to Pizza Express!";
	res.render('index', {
		data: welcomeMessage
	});
});

//route for toppings
app.get('/topping/:type', function(req, res, next) {
	var toppingsChoice = `${req.params.type} pizza!, Good Choice.`
    res.render('toppings', {
		data: toppingsChoice
	});
});

//route for order details
app.get('/order/:amount/:size', function(req, res, next) {

   var orderDetails = `Your order of ${req.params.amount} ${req.params.size} pizzas will be ready in 1 minute!`;
   res.render('order', {
		data: orderDetails
	});
});
//404 Error message
app.get('*', function(req, res){
 	var errorMsg = "Page Not Found"
 	res.render('error', {
 		data: errorMsg
 	});
});

// tells the server to listen for requests on port 3000
app.listen(port, function(){
  console.log("==========================")
  console.log('LISTENING ON PORT ' + port);
  console.log("==========================")
});