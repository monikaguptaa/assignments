angular.module('searchApp')
.service('searchDetailsService', ['$http' , function($http){
	this.searchDetails=function(name, newPage){
		console.log("searchDetailsService----->",name);
		console.log("searchDetailsService----->",newPage);
		return $http.get("http://www.omdbapi.com/", {params: {s: name, page: newPage}});
	}
}]);