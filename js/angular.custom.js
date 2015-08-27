var login = angular.module('login', []);
var user = angular.module('user', []);

login.controller('LoginController', function($scope) {
	
	$scope.isSubmitted = false;

	$scope.logMeIn = function(valid) {
		$scope.isSubmitted = true;
		if (valid) {
			alert('Submitted');
		}
	};

});

login.controller('UserController', function($scope) {
	
	$scope.add = function() {
		console.log($scope.user.name);	
		console.log($scope.user.dob);
		console.log($scope.user.mobile);
		console.log($scope.user.address);
	}
});

var app = angular.module('pdp', ['login', 'user']);