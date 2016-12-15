angular.module('searchApp').
service('searchService',['$http',function($http){
	console.log("searchService service -->");
	this.searchMovies = function(searchTerm, newPage){
		//http://www.omdbapi.com/?s=don
		console.log("searchService call service -->",searchTerm);
		return $http.get("http://www.omdbapi.com/", {params: { s: searchTerm ,page: newPage }});
	}
}]);