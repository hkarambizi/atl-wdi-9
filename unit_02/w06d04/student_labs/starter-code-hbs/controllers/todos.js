var express = require('express');
var router = express.Router();
var data = require('../data.js')
//index
router.get('/', function(req, res) {
  res.render('todos/index', {
    todos: data.seededTodos
  });
});
//new
 router.get('/new', function(req, res) {
 	res.render('todos/new')
 });
//show
 router.get('/:id', function(req, res) {
  var todo = data.seededTodos[req.params.id];
  res.render('todos/show', {
    todos: todo
  });
});
//post
 router.post('/', function(req, res) {
 	var newToDo = {
 		description: req.body.description,
 		urgent: req.body.urgent
 	};
 	data.seededTodos.push(newToDo);
 	res.redirect('/todos')
 });
//edit
router.get('/:id/edit', function(req, res){
  res.render('todos/edit', {
    todo: {
      description: data.seededTodos[req.params.id].description,
      urgent: data.seededTodos[req.params.id].urgent,
      id: req.params.id
    }
  });
});
//update
router.put('/:id', function(req, res) {
  var todoToEdit = data.seededTodos[req.params.id];

  todoToEdit.description = req.body.description;
  todoToEdit.urgent = req.body.urgent;

  res.redirect('/todos');
})
//delete
 router.delete('/:id', function(req, res) {
	data.seededTodos.splice(req.params.id, 1); // remove the item from the array

	res.redirect('/todos');  // redirect back to the index route
});


//export the route to server.js
module.exports = router;