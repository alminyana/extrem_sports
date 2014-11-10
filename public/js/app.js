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
				templateUrl: './templates/adventures.html',
				controller: 'todasCtrl'
			})
			.state ('create', {
				url: '/create',
				templateUrl: './templates/create.html',
				controller: 'createCtrl'
			})
			.state ('create.datos', {
				url: '/datos',
				templateUrl: './templates/create-form1.html'
			})
			.state ('create.datos2', {
				url: '/datos2',
				templateUrl: './templates/create-form2.html'
			})
			.state ('create.datos3', {
				url:'/datos3',
				templateUrl: './templates/create-form3.html',
				controller: 'createCtrl'
			})
	}]);