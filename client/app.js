var App = angular.module('app', [])

.controller('userInput', function appControllerFunc($scope, $interval, $location, $anchorScroll, $http) {

  angular.element(document).ready(function() {
    $scope.counter = 0;
    var zuckTimer = $interval(function() {
        $scope.counter+= 1;
      }, 106);
  });

  $scope.income = undefined;

  $http.get('/api/income')
    .success(function(data) {
      console.log('get data', data);
    })
    .error(function(data) {
      console.log('get err', data);
    });

    var incomeData = {
      income: $scope.income
    };

  $scope.saveIncome = function() {
    $http.post('/api/income', {income: $scope.income})
    .success(function(data) {
      console.log('post data', data);
    })
    .error(function(data) {
      console.log('post err', data);
    });
  };

  $scope.userInputIncome = function() {
    $scope.youVsZuck = youVsZuckerberg($scope.income);
    $scope.perspective = perspective($scope.income);
  };

  // $scope.scroll = function() {
  //   $location.hash('bottom');
  //   console.log('clicked');
  //   $anchorScroll();
  // };
  $scope.showDiv = function() {
    $('#bottom').css('display', 'block');
  };
});
