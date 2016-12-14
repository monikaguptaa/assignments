angular.module('searchApp').
service('movieInfo',['$http',function($http){
	console.log(" duplicate searchService service -->");
	this.fullMovieInfo = function(ID){
		console.log(" inside movie function -->");
		return $http.get("http://www.omdbapi.com/", {params: { i: ID }});
	}
}]);