var controller = require('./about.controller.js');
var template = require('./about.html');

var component = {
	template: template,
	controller: controller
}

angular
	.module('criminals')
		.component('about', component);