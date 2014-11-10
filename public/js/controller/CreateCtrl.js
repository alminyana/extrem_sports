'Use strict';

angular
	.module('xtremeApp')
	.controller('createCtrl', ['$scope', '$http', '$stateParams', '$state', function ($scope, $http, $stateParams, $state){
		$scope.formu1 = "Datos principales";
		$scope.formu2 = "Datos técnicos";
		//objeto donde guardo los datos del form
		$scope.formData = {};
		$scope.keys=[];
		$scope.addKey = function() {
			var algo = $.inArray($scope.formData.clave, $scope.keys);
				//console.log(algo);
				if (algo==-1) {
					if ($scope.formData.clave != '') {
						$scope.keys.push($scope.formData.clave);
						$scope.formData.clave = '';
					}
				} else {
					$scope.formData.clave = '';
				}
				$scope.formData.keywords = $scope.keys;
		};
		$scope.saveData = function () {
			console.log($scope.formData);
			$http.post('/servicioAventuras', $scope.formData)
				.success(function(data){
					//console.log(data);
					$scope.formData = {};
					$scope.keys=[];
				});		
		};
	}]);

