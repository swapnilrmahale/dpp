var login = angular.module('login', []);

login.controller('LoginController', function($scope) {
	
	$scope.isSubmitted = false;

	$scope.logMeIn = function(valid) {
		$scope.isSubmitted = true;
		if (valid) {
			alert('Submitted');
		}
	};

});

var app = angular.module('pdp', ['login']);