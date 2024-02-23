import { authenticatedUserData } from "../../const";

const authService = angular.module("myApp.authService", []);

authService.service("AuthService", function () {
  this.userId = authenticatedUserData.id;
  this.userName = authenticatedUserData.name;
  this.userGender = authenticatedUserData.gender;

  this.getUserId = () => {
    return this.userId;
  };

  this.getUserName = () => {
    return this.userName;
  };

  this.getUserGender = () => {
    return this.userGender;
  };

  return this;
});
