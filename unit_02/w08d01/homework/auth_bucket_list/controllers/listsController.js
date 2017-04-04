//======================
// REQUIREMENTS
//======================
//require express,router,  mongoose, List schema, User schema, authHelpers
var express = require('express');
router = express.Router();
var User = require('../models/user.js');
var List = require('../models/list.js');
var authHelpers = require('../helpers/auth.js');


//======================
// CREATE
//======================
//create a POST "/" route that saves the list item to the logged in user
router.post('/', authHelpers.createSecure, function(req, res){

  var list = new List({
    name: req.body.name,
    completed: req.body.completed
  });

  list.save(function(err, user){
    if (err) console.log(err);
    console.log(user);
    console.log(req.session.currentUser);
    res.redirect('/users/login');
  });
});


//======================
// EDIT
//======================
//create a GET "/:id/edit" route that renders the list's edit page
router.get('/:id/edit', function(req, res){
  User.findById(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log(user);
    res.render('users/edit.hbs', {
      user: user
    });
  });
});


//======================
// UPDATE
//======================
//create a PUT "/:id" route that saves the changes from the list.
router.put('/:id', function(req, res){
  User.findByIdAndUpdate(req.params.id, {
    first_name: req.body.first_name,
    email: req.body.email
  }, { new: true })
  .exec(function(err, user){
    if (err) { console.log(err); }
    console.log(user);
    res.render('users/show.hbs', {
      user: user
    });
  });
});

//======================
// DELETE
//======================
//create a DELETE "/:id" route that deletes the list item
router.delete('/:id', function(req, res){
  User.findByIdAndRemove(req.params.id)
  .exec(function(err, user) {
    if (err) console.log(err);
    console.log('User deleted!');
    res.send("User deleted");
  });
});

//======================
// EXPORTS
//======================
module.exports = router;
