import template from './app-header.template.html';

angular.module('appHeader', []).component('appHeader', {
  template,
  controller: function ($scope, AuthService) {
    $scope.userName = AuthService.getUserName();

    this.logout = (event) => {
      event.preventDefault();
    };
  }
});
