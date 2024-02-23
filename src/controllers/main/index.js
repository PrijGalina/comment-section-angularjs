let myAppControllers = angular.module("myApp.controllers", []);

myAppControllers.controller("MainController", [
  "$scope",
  function MainController($scope) {
    $scope.commentsCount = 0;
  },
]);
