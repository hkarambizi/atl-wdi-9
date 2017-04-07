var controller = require('./navigation.controller.js');
var template = require('./navigation.html');

var component = {
	controller: controller,
	template: template
}

angular
	.module('criminals')
	.component('navigation', component);