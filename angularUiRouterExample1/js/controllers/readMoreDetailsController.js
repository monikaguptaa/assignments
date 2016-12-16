angular.module('searchApp')
.controller('readMoreDetailsController',['$scope','readMoreDetailsService','$stateParams', function($scope, readMoreDetailsService, $stateParams){

   
   $scope.moviedetails =function(id){
   	var movieInfo = readMoreDetailsService.readMoreDetails(id);
        movieInfo.then(function(response){
        	$scope.movie = response.data;
        	console.log("movie details data", movie );
        },
           function(response){
           	console.log(error);
           });
       };

    $scope.moviedetails($stateParams.id);   
	}]);

