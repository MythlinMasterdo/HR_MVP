var App = angular.module('app', [])
.controller('userInput', function appControllerFunc($scope, $interval, $location, $anchorScroll) {
  angular.element(document).ready(function() {
    $scope.counter = 0;
    var zuckTimer = $interval(function() {
        $scope.counter+= 1;
      }, 106);
  });
  $scope.income;

  $scope.userInputIncome = function() {
    $scope.youVsZuck = youVsZuckerberg($scope.income);
    $scope.perspective = perspective($scope.income);
  };

  $scope.scroll = function() {
    $location.hash('bottom');
    console.log('clicked');
    $anchorScroll();
  };
});
