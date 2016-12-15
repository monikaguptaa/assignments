angular.module('searchApp')
       .config(function ($routeProvider) {
            console.log("inconfig");
             $routeProvider
               .when('/search/:search_name',{
               	 templateUrl: "templates/search.html",
               	 controller: "searchController"
               })
               .when('/details/:movieID',{
               	templateUrl:"templates/movieInfo.html",
               	controller:"readMoreController"
               })
               .when('/back',{
                templateUrl: "templates/search.html",
                controller: "searchController"
               })
       });