var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
      templateUrl : "index.html",
      controller : "myCtrl"
  })
  
  .when('/home', {
    templateUrl : 'pages/home.html',
    controller  : 'HomeController'
  })

  .when('/blog', {
    templateUrl : 'pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller("myCtrl", function($scope) {
	 $scope.names = ["Argentina","Australia", "Brazil", "Chile","Denmark","Egypt","France","Germany","Hungary","India","Japan","Kenya","Lebanon","Mexico","Netherlands","Oman","Paraguay"];
}); 


app.controller('HomeController', function($scope) {
  $scope.message = 'Hello from HomeController';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'Hello from BlogController';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'Hello from AboutController';
});
