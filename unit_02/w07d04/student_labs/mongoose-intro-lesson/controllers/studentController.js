var Schema = require("../db/schema.js");
var StudentModel = Schema.StudentModel;
var ProjectModel = Schema.ProjectModel;

var studentsController = {
	//INDEX/HOME view 
	index: function() {
		StudentModel.find({})
			.exec(function(err, docs) {
				if(err) {console.log(err);}

				docs.forEach(function(doc){
					console.log(doc);
				})
			});
	},
	// SHOW VIEW (similar to show.hbs)
	show: function(req) {
		StudentModel.findOne({"name": req.name})
		.exec(function(err, doc) {
			if(err) {console.log(err);}

			console.log(doc);
		});
	},
	update: function(req, update) {
		StudentModel.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true})
		.exec(function(err,docs) {
			if(err) {console.log(err);}

			console.log(docs);
		});
	},
	destroy: function(req) {
		StudentModel.findOneAndRemove({name: req.name})
		.exec(function(err, docs) {
			if(err) {console.log(err);}

			console.log(docs);
		});
	}
};


studentsController.show({name: "becky"});
studentsController.update({name: "steve"}, {name: "Harry"});
studentsController.destroy({name: "brandon"});
studentsController.show({name: "steve"});