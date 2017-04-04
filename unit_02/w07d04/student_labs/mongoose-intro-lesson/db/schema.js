//this is to call on mongoose and to create student database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/students');

//we must specify a promise library to avoid a depreciation warning in the console.
mongoose.Promise = global.Promise;

// Now that we are connected, let's save that connection to the database in a variable. We are just doing this to keep our code DRY.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', function(err) {
	console.log("awww, mann!!!: " + err);
});

// Will log "database has been connected" if it successfully connects.
db.once('open', function() {
	console.log('Yeeeaa boiiii, database has been connected');
});

//creating a variable in order to create a new instance of the Schema constructor
var Schema = mongoose.Schema;

//Because StudentSchema will include ProjectSchema, we must declare it above
var ProjectSchema = new Schema({
  title: String,
  unit: String
});

// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var StudentSchema = new Schema({
  name: String,
  age: Number,
  projects: [ProjectSchema]
});

//.model() makes a copy of the schema. we assign these new schemas variables of ProjectModel & StudentModel
var ProjectModel = mongoose.model("Project", ProjectSchema);
var StudentModel = mongoose.model("Student", StudentSchema);

/*
//create a new StudentSchema by assigning a new Instance of StudentModel and enter the details as a paramater
var harry = new StudentModel({name: "Harry K.", age: 28});

// Then we save it to the database using .save
harry.save(function(err, student){
  if (err) {
    console.log(err);
  }
  else {
    console.log(student);
  }
});

//NEXT, we create a project...

var anna = new StudentModel({name: "Anna", age: 24});
var project1 = new ProjectModel({title: "memory game", unit: "JS"});

// Now we add that project to a student's collection / array of projects.
anna.projects.push(project1);

// In order to save that project to the student, we need to call `.save()` on the student -- not the project.
anna.save(function(err, student) {
  if (err) {
    console.log(err);
  }
  else {
    console.log(student + " was saved to our db!");
  }
});
*/
//NEXT: Try to SEED your database.(You will need to comment out the above code)
// By adding `module.exports`, we can reference these models in other files by requiring `schema.js`.
module.exports = {
  StudentModel: StudentModel,
  ProjectModel: ProjectModel
};