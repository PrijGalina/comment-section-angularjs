import { authenticatedUserData } from "../../const";

export function AuthService() {
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
}
