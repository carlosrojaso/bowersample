	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/step1.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/step2', {
				templateUrl : 'pages/step2.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/step3', {
				templateUrl : 'pages/step3.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'And it takes less than 157 seconds* to make your online shopping perfectly personal.';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Step 1';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Step 2';
	});