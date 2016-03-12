(function() {
  'use strict';

  angular.module('app', [
    'ui.router'
  ])
  
  .controller('State1Ctrl', ['$scope', function($scope) {
    console.log('cdn2', cdn);
    $scope.test = 'hi';
    console.log($scope.test);
  }])

  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
     // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
    
  // cdn is available here
  console.log("cdn: ", cdn);
    
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: cdn + "views/state1.html",
      controller: 'State1Ctrl'
    })
    .state('state1.list', {
      url: "/list",
      templateUrl: "views/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "views/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "views/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    });

  }]);

})();