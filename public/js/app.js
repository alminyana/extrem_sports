'Use strict';

angular
	.module ('xtremeApp',[
		'ui.router',
		'ngAnimate'
	])
	.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state ('home', {
				url: '/',
				templateUrl: './templates/home.html'
			})
			.state ('adventures', {
				url: '/adventures',
				templateUrl: './templates/adventures.html'
			})
			.state ('create', {
				url: '/create',
				templateUrl: './templates/create.html',
				controller: 'CreateCtrl'
			})
			.state ('create.datos', {
				url: '/create/datos',
				templateUrl: './templates/create-form1.html'
			})
	}]);