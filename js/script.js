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
			})
			
			// route for the contact page
			.when('/step4', {
				templateUrl : 'pages/step4.html',
				controller  : 'stepfourController'
			})
			
			// route for the contact page
			.when('/step5', {
				templateUrl : 'pages/step5.html',
				controller  : 'stepfiveController'
			})
			
			// route for the contact page
			.when('/step6', {
				templateUrl : 'pages/step6.html',
				controller  : 'stepsixController'
			})
			
			// route for the contact page
			.when('/step7', {
				templateUrl : 'pages/step7.html',
				controller  : 'stepsevenController'
			})
			
			// route for the contact page
			.when('/step8', {
				templateUrl : 'pages/step8.html',
				controller  : 'stepeightController'
			})
			
			// route for the contact page
			.when('/step9', {
				templateUrl : 'pages/step9.html',
				controller  : 'stepnineController'
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