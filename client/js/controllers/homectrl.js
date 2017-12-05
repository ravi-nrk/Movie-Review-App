var app  = angular.module('contacts');

app.controller('homeController',['$scope', '$http', '$routeParams', '$location','appServices',function($scope, $http, $routeParams, $location,appServices,$window){
	localStorage.clear();
	$scope.moviesObj = [{
		name:"Bahubali 2 - The Conclusion",
		image:"bahubali.jpg"
	},{
		name:"Khaidi No 150",
		image:"khaidi.png"
	},{
		name:"Dangal",
		image:"dangal.png"
	},{
		name:"Jungle Book",
		image:"jbook.png"
	},{
		name:"Ant-Man",
		image:"antman.png"
	},{
		name:"Boss Baby",
		image:"bossbaby.png"
	},{
		name:"Captain America - Civil War",
		image:"civilwar.png"
	},{
		name:"Fast and Furious 8",
		image:"ff8.png"
	},{
		name:"Guardians of Galaxy 2",
		image:"gog.png"
	},{
		name:"Ghost In The Shell",
		image:"gshell.png"
	},{
		name:"Kong Skull Island",
		image:"kong.png"
	},{
		name:"Moana",
		image:"moana.png"
	}];

	$scope.gotoreview = function(movieData){

	 		appServices.set(movieData);
	 	localStorage.setItem("movieData", JSON.stringify(movieData));
		 	$location.path('/review/'+ movieData.name);
		 }
	

	 // $scope.FiedsValues = {};
	 // 	$scope.contacts = [];
	 // $scope.contactsForm = function(formData){
		// appServices.addContact(formData).then(function (response) { 
		// $scope.contacts.push(response.data);
		// console.log($scope.contacts);
		// })

		//  $scope.FiedsValues = {};
	 // }
}]);