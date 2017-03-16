var express = require('express');
var router = express.Router();

//reverse routes

router.get('/reverse/:word', function(req, res) {
	//var wordToReverse = (${req.params.word})
 console.log(req.params)
});

module.exports = router;