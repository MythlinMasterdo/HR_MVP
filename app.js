var App = angular.module('app', [])
.controller('userInput', function appControllerFunc($scope, $interval) {
  angular.element(document).ready(function() {
    $scope.counter = 0;
    var zuckTimer = $interval(function() {
        $scope.counter+= 1;
      }, 106);
  });
  $scope.income = 0;

  $scope.userInputIncome = function() {
    console.log($scope.income);
    $scope.youVsZuck = youVsZuckerberg($scope.income);
    $scope.perspective = perspective($scope.income);
    console.log($scope.youVsZuck);
    console.log($scope.perspective);
  };
});
