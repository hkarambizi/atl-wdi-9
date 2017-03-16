var express = require('express');
var router = express.Router();

//greeting routes
router.get('/:name', function(req, res) {
		var greetUser = "Hello there, " + req.params.name;
		
		res.render('greeting', {
			data: greetUser
		});
 
});

module.exports = router;