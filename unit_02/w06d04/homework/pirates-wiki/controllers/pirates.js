//your code below
//requirements
var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//all routes for /pirate
router.get('/', function(req, res) {
	res.render('pirates/index', {
		data: pirates
	});
});

router.get('/new', function(req, res) {
	res.render('pirates/new')
	});


router.post('/', function(req,res) {
  var addPirate = {
    name: req.body.name,
    birthplace: req.body.birthplace,
    death_year: req.body.death_year,
    base: req.body.base,
    nickname: req.body.nickname
  };
  pirates.push(addPirate);
  res.redirect('/pirates');
});


router.get('/:id', function(req,res) {
    var pirateList = pirates[req.params.id];
    res.render('pirates/show', {
      data: pirateList
    });
  });

//exports
module.exports = router;