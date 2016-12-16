angular.module('searchApp')
.controller('searchDetailController', ['$scope' ,'searchDetailsService' ,'$stateParams' , function($scope, searchDetailsService, $stateParams){

    $scope.pagination={
    	perPage: 10,
    	currentPage: 1,
    	total: 0
    };

	$scope.searchResult = function(searchName,pageNumber){
           var result = searchDetailsService.searchDetails(searchName,pageNumber);
           result.then(function(response){
           	  $scope.result= response.data;
           	  console.log("result data",response.data);
           	  $scope.resultData = $scope.result.Search;
           	  $scope.pagination.total = $scope.result.totalResults;
           } ,
              function(response){
              	console.log(error);
              });

	};

	$scope.pageChanged = function(newPageNumber){
		$scope.pagination.currentPage = newPageNumber;
		$scope.searchResult($stateParams.name ,newPageNumber);
	}

	$scope.searchResult($stateParams.name ,$scope.pagination.currentPage);
}]);