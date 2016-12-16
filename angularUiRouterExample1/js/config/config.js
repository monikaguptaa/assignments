angular.module('searchApp')
.config(function($stateProvider){

	$stateProvider
	  .state("search", {
            url: "/search/:name",
            templateUrl: "templates/searchDetails.html",
            controller: "searchDetailController"
	  })
	  .state("readMore", {
	  	    url: "/movieDetails/:id",
	  	    templateUrl: "templates/movieDetails.html",
	  	    controller: "readMoreDetailsController"
	  })
	  .state("back",{
	  	        url: "/search/:name",
                templateUrl: "templates/searchDetails.html",
                controller: "searchDetailController"
               })
});