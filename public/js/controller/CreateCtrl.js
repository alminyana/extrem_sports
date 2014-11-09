'Use strict';

angular
	.module('xtremeApp')
	.controller('createCtrl', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state){
		$scope.formu1 = "Datos principales";
		$scope.formu2 = "Datos técnicos";
		$scope.iraFormDos = function () {
			$state.go('create.datos2',{},{reload: false});
		}
	}]);

