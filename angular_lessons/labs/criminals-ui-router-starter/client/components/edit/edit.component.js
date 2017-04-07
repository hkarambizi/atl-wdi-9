var controller = require('./edit.controller.js');
var template = require('./edit.html');

var component = {
	template: template,
	controller: controller
}

angular
	.module('criminals')
		.component('editCriminal', component);