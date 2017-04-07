var controller = require('./criminals.show.controller.js');
var template = require('./criminals.show.html');

var component = {
	controller: controller,
	template: template
};

angular
	.module('criminals')
	.component('criminalsShow', component);