import template from "./app-header.template.html";

angular.module("appHeader", []).component("appHeader", {
  template,
  controller: function () {
    this.logout = function (event) {
      event.preventDefault();
    };
  },
});
