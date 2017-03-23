//======================
// REQUIREMENTS
//======================
// require express, router, mongoose, Donut schema
var express = require('express');
var router = express.Router();
var Donut = require("../models/donuts");

//======================
// INDEX
//======================
// Create a GET index route "/" that sends all donuts to index.hbs
router.get('/', function(req, res){
  Donut.find({})
    .exec(function(err, donuts){
      if (err) { console.log(err); }
      console.log(donuts);
      res.render('donuts/index.hbs', {
        donut: donuts
      });
    });
});


//======================
// NEW
//======================
// Create a GET new route "/new" that renders the new.hbs form
router.get('/new', function(req, res){
      res.render('donuts/new.hbs');
    });

//======================
// SHOW
//======================
// Create a GET show route "/:id" that renders the donut's show page
router.get('/:id', function(req, res){
  Donut.findById(req.params.id)
  .exec(function(err, donut) {
    if (err) console.log(err);
    console.log(donut);
    res.render('donuts/show.hbs', {
      donut: donut
    });
  });
});



//======================
// CREATE
//======================
// Create a POST index route "/" that creates a new donut
// and upon success redirects back to the index page "/"
router.post('/', function(req, res){
  var donut = new Donut({
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
    price: req.body.price
  });
  donut.save(function(err, donut){
    if (err) { console.log(err); }
    console.log(donut);
    res.send(donut);
    res.redirect('/');
  });
});



//======================
// EDIT
//======================
// Create a GET edit route "/:id/edit" that renders the edit.hbs page and
// sends that donut's data to it
router.get('/:id/edit', function(req, res){
  Donut.findById(req.params.id)
  .exec(function(err, donut) {
    if (err) console.log(err);
    console.log(donut);
    res.render('donuts/edit.hbs', {
      donut: donut
    });
  });
});


//======================
// UPDATE
//======================
// Create a PUT update route "/:id" that updates the donut and
// redirects back to the SHOW PAGE (not index)
router.put('/:id', function(req, res){
  Donut.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    description: req.body.description,
    img: req.body.img,
    price: req.body.price
  }, { new: true })
  .exec(function(err, donut){
    if (err) { console.log(err); }
    console.log(donut);
    res.render('donuts/show.hbs', {
      donut: donut
    });
  });
});


//======================
// DELETE
//======================
// Create a DELETE delete route "/:id" that deletes the donut and
// redirects back to index page "/"
router.delete('/:id', function(req, res){
  Donut.findByIdAndRemove(req.params.id)
  .exec(function(err, donut) {
    if (err) console.log(err);
    console.log('Donut deleted!');
    res.send("Donut deleted");
  });
});


//======================
// EXPORTS
//======================
// export router with module.exports
module.exports = router;