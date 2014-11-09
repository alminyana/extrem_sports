'Use strict';

angular
	.module('xtremeApp')
	.controller('createCtrl', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state){
		$scope.formu1 = "Datos principales";
		$scope.formu2 = "Datos técnicos";
		//innstancia de array de palabras clave
		var keys = []
		$scope.keys = keys;
		//metodos de cambio de estado desde el ui-view (ui-sref no funciona entre estados)
		$scope.iraFormDos = function () {
			$state.go('create.datos2',{},{reload: false});
			
			var objeto = {
				nombre: $scope.nombre,
				descripcion: $scope.descrip
			};
			console.log(objeto);
		};
		$scope.iraFormUno = function () {
			$state.go('create.datos',{},{reload: false});
		};
		$scope.iraFormTres = function () {
			$state.go('create.datos3', {}, {reload: false});
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
		};
		$scope.saveData = function () {
			console.log($scope.objeto);
				
		};
	}]);

