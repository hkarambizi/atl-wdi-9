var controller = require('./new.controller.js');
var template = require('./new.html');

var component = {
	controller: controller,
	template: template
}

angular
	.module('criminals')
	.component('newCriminal', component);