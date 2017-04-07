const angular = require('angular');
require('angular-ui-router');


angular
	.module('criminals', ['ui.router'])
	.config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('home', {
			url: '/',
			template: '<home></home>'
		})
		.state('about', {
			url: '/about',
			template: '<about></about>'
		})
		.state('criminals', {	
			url: '/criminals',
			template: '<criminals></criminals>'
		})
		.state('newCriminal', {
			url: '/criminals/new',
			template: '<new-criminal></new-criminal>'
		})
		.state('criminalsShow', {
			url: '/criminals/:criminalId',
			template: '<criminals-show></criminals-show>',
		})
		.state('editCriminal', {
			url: '/criminals/edit/:criminalId',
			template: '<edit-criminal></edit-criminal>',
		});

	$urlRouterProvider.otherwise('/');	

audiojs.events.ready(function() {

  	var as = audiojs.createAll();
});


}