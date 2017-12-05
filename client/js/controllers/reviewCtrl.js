var app  = angular.module('contacts');

app.controller('reviewController',['$scope', '$http', '$routeParams', '$location','appServices',function($scope, $http, $routeParams, $location,appServices){
	$scope.movieDetails = appServices.get();
	if($scope.movieDetails == undefined){
		if(localStorage.getItem("movieData") !== undefined){
			$scope.movieDetails = JSON.parse(localStorage.getItem("movieData"));
		}
	}
	$scope.FiedsValues={name:"",review:""};
	$scope.showreview = [];
	if($scope.showreview.length == 0){
		if(localStorage.getItem("reviewData") !== null){
			$scope.showreview = JSON.parse(localStorage.getItem("reviewData"));
		}
	}
	$scope.reviewLength = false;
	$scope.reviewEmpty = false;
	$scope.starRate;
	$scope.stars = function(starValue){
		if(validator.isNumeric(starValue) == true){
			$scope.starRate = starValue;
			if(starValue == '1'){
				document.getElementById('star1').style.color = "green";
			}else if(starValue == '2'){
				document.getElementById('star1').style.color = "green";
				document.getElementById('star2').style.color = "green";
			}else if(starValue == '3'){
				document.getElementById('star1').style.color = "green";
				document.getElementById('star2').style.color = "green";
				document.getElementById('star3').style.color = "green";
			}else if(starValue == '4'){
				document.getElementById('star1').style.color = "green";
				document.getElementById('star2').style.color = "green";
				document.getElementById('star3').style.color = "green";
				document.getElementById('star4').style.color = "green";
			}else if(starValue == '5'){
				document.getElementById('star1').style.color = "green";
				document.getElementById('star2').style.color = "green";
				document.getElementById('star3').style.color = "green";
				document.getElementById('star4').style.color = "green";
				document.getElementById('star5').style.color = "green";
			}
		}
	}
	$scope.addReview = function(values){
		if(validator.isEmpty(values.name) == false && validator.isEmpty(values.review) == false){
			$scope.reviewEmpty = false;
			var x = validator.blacklist(values.name, '*/\.,-');
			var y = validator.isLength(values.review, {min:0, max: 30});
		}else{
			$scope.reviewEmpty = true;
		}
		
		
		if(y === true){
			$scope.reviewLength = false;
			var obj = {};
			obj.name = x;
			obj.review = values.review;
			obj.rate = $scope.starRate;
			$scope.showreview.push(obj);
			$scope.FiedsValues={name:"",review:""};
			document.getElementById('star1').style.color = "black";
			document.getElementById('star2').style.color = "black";
			document.getElementById('star3').style.color = "black";
			document.getElementById('star4').style.color = "black";
			document.getElementById('star5').style.color = "black";
		}else{
			$scope.reviewLength = true;
		}
		localStorage.setItem("reviewData", JSON.stringify($scope.showreview));
	}

}]);