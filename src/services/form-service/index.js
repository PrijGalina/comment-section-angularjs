const formService = angular.module("myApp.formService", []);

formService.service("FormService", function () {
  this.openForm = null;

  this.isOpen = () => this.openForm !== null;

  this.open = (id) => {
    this.openForm = id;
  };

  this.close = () => {
    this.openForm = null;
  };

  return this;
});
