var express = require('express');
var router = express.Router();
var data = require('../data.js')
router.get('/', function(req, res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});

 router.get('/new', function(req, res) {
 	res.render('todos/new')
 });
 
 router.get('/:id', function(req, res) {
  var todo = data.seededTodos[req.params.id];
  res.render('todos/show', {
    todos: todo
  });
});
//export the route to server.js
module.exports = router;