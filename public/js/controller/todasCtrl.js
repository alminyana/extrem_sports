'Use strict';

angular
	.module('xtremeApp')
	.controller('todasCtrl', ['$scope','$http','$state', function ($scope, $http, $state){
		$scope.todas = [];
		$scope.renderAventurasResponse = function (response) {
			$scope.todas = response;
		}
		$scope.cargarTodas = function () {
			$http.get('servicioAventuras')
				.success($scope.renderAventurasResponse);
		}
		$scope.cargarTodas();
	}]);