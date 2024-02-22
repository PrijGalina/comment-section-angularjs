import template from "./app-header.template.html";
import { authenticatedUserData } from "../../../const";

angular.module("appHeader", []).component("appHeader", {
  template,
  controller: function ($scope) {
    $scope.userName = authenticatedUserData.name;

    this.logout = function (event) {
      event.preventDefault();
    };
  },
});
