angular.module('searchApp')
.service('readMoreDetailsService', ['$http', function($http){
	this.readMoreDetails = function(imdbId){
		return $http.get("http://www.omdbapi.com/", {params: {i: imdbId}});
	}
}]);