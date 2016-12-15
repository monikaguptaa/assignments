angular.module('searchApp')
.controller('searchController',['$scope' , 'searchService' , '$routeParams' , function($scope , searchService, $routeParams){
         console.log("hello i m in search controller");
         console.log("$scope.$parent.searchTerm ---->",$routeParams.search_name); 
         $scope.pagination={
            perPage: 10,
            currentPage: 1,
            total: 0
         };

         $scope.search = function(searchTerm , pageNumber){
         	var results = searchService.searchMovies(searchTerm, pageNumber);
            console.log("search fnx first line");
         	results.then(function(response){
         	/*	console.log("success respose from promise",response.data);*/
         		$scope.results = response.data;
               $scope.pagination.total= $scope.results.totalResults;
               console.log("total results",$scope.pagination.total);
         		$scope.viewResult = $scope.results.Search;
               console.log("again in search controller");
         	},function(response){
         		console.log("error");
         	});
         };

         $scope.pageChanged=function(pageNumber){
            $scope.pagination.currentPage = pageNumber;
            console.log("new page number",$scope.pagination.currentPage);
            $scope.search($routeParams.search_name, pageNumber);
         };

         $scope.search($routeParams.search_name, $scope.pagination.currentPage);
         console.log("after search function call");  

       /*  $scope.refresh=function(){
            $route.reload();
            console.log("refresh function call");
            $scope.search($scope.$parent.searchTerm, $scope.pagination.currentPage);
         }; */
}]);