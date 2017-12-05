var app = angular.module('contacts',['ngRoute','ngMaterial']);
app.config(function($routeProvider, $locationProvider){
	$routeProvider.when('/',{
		controller:'homeController',
		templateUrl:'views/home.html'
	})
	.when('/review/:param',{
		controller:'reviewController',
		templateUrl:'views/details.html'
	})
	.otherwise({
		redirectTo:'/'
	});

	$locationProvider.html5Mode(true);
});