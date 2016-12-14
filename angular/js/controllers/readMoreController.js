angular.module('searchApp')
       .controller('readMoreController', ['$scope', '$routeParams' , 'movieInfo' , function($scope ,$routeParams, movieInfo){  
     	        $scope.info = function(ID){
           	 	    var movieDetails = movieInfo.fullMovieInfo(ID);
           	 	    movieDetails.then(function(response){
                       $scope.movie=response.data;
                       console.log("response from promise",response.data);     
           	 	    },function(response){
                          console.log("error");
       	 	        });
         	    };

           	  $scope.info($routeParams.movieID); 

         }]);
        
