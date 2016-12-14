angular.module('searchApp')
.controller('searchController',['$scope' , 'searchService' , function($scope , searchService){
         
      /*   console.log("$scope.$parent.searchTerm ---->",$scope.$parent.searchTerm); */
         $scope.pagination={
            perPage: 10,
            currentPage: 1,
            total: 0
         };

         $scope.search = function(searchTerm , pageNumber){
         	var results = searchService.searchMovies(searchTerm, pageNumber);
         	results.then(function(response){
         	/*	console.log("success respose from promise",response.data);*/
         		$scope.results = response.data;
               $scope.pagination.total= $scope.results.totalResults;
               console.log("total results",$scope.pagination.total);
         		$scope.viewResult = $scope.results.Search;
         	},function(response){
         		console.log("error");
         	});
         };

         $scope.pageChanged=function(pageNumber){
            $scope.pagination.currentPage = pageNumber;
            console.log("new page number",$scope.pagination.currentPage);
            $scope.search($scope.$parent.searchTerm, pageNumber);
         };

         $scope.search($scope.$parent.searchTerm, $scope.pagination.currentPage);

         
}]);