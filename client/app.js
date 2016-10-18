var App = angular.module('app', [])

.controller('userInput', function appControllerFunc($scope, $interval, $http) {

  angular.element(document).ready(function() {
    $scope.counter = 0;
    var zuckTimer = $interval(function() {
        $scope.counter+= 25;
      }, 44);
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
    $scope.forYou = forYou($scope.income);
  };

  $scope.showDiv = function() {
    $('#bottom').css('display', 'block');
  };

  $scope.scrollToSelection = function() {
    $.scrollTo('.numberCircle', {
      duration: 600
    });
  };
});
