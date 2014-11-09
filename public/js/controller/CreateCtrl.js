'Use strict';

angular
	.module('xtremeApp')
	.controller('createCtrl', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state){
		$scope.formu1 = "Datos principales";
		$scope.formu2 = "Datos técnicos";
		var keys = []
		$scope.keys = keys;
		$scope.iraFormDos = function () {
			$state.go('create.datos2',{},{reload: false});
		};
		$scope.iraFormUno = function () {
			$state.go('create.datos',{},{reload: false});
		};
		$scope.addKey = function() {
			//console.log($scope.clave);
			var algo = $.inArray($scope.clave, $scope.keys);
				console.log(algo);
				if (algo==-1) {
					if ($scope.clave != '') {
						$scope.keys.push($scope.clave);
						$scope.clave = '';
					}
				} else {
					$scope.clave = '';
				}
			
		}
	}]);

