//Below we are importing data from schema.js and then test to see if it is seeded


var mongoose = require('mongoose');
var Schema = require("./schema.js");

var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

//Now let's call some methods in db/seeds.js that will populate our database...

// First we clear the database of existing students and projects.
StudentModel.remove({}, function(err) {
  console.log(err);
});

ProjectModel.remove({}, function(err) {
  console.log(err);
});

// Now, we will generate instances of a Student and of their Project.
var becky = new StudentModel({name: "becky"});
var brandon = new StudentModel({name: "brandon"});
var steve = new StudentModel({name: "steve"});

var project1 = new ProjectModel({title: "project1!!", unit: "JS"});
var project2 = new ProjectModel({title: "project2!!", unit: "Express"});
var project3 = new ProjectModel({title: "project3!!", unit: "Angular"});
var project4 = new ProjectModel({title: "project4!!", unit: "Rails"});

// create two arrays that we can iterate over
var students = [becky, brandon, steve];
var projects = [project1, project2, project3, project4];

// Here we assign some projects to each student.
students.forEach(function(student, i){
  student.projects.push(projects[i], projects[i + 1]);
//YOU MUST use .save to save the students to db. Always use an error function with save.
  student.save(function(err) {
    if(err) { console.log(err); }
    
    console.log(student);
  });
});