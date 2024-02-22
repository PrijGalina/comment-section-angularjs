import template from "./reply-form.template.html";
import { generateUniqueId } from "../../../utils";

angular.module("replyForm", []).component("replyForm", {
  template,
  controller: function ($scope, AuthService, CommentService) {
    $scope.addReply = function (event) {
      event.preventDefault();
      const parentId = $scope.$parent.$parent.commentId;
      const replyId = generateUniqueId();
      const replyText = $scope.replyText;
      const userId = AuthService.getUserId();
      const userName = AuthService.getUserName();
      const userGender = AuthService.getUserGender();
      const currentMoment = new Date().toISOString();

      const reply = {
        id: replyId,
        autor: {
          id: userId,
          name: userName,
          gender: userGender,
        },
        comment: replyText,
        date: currentMoment,
        replies: [],
      };

      CommentService.addComment(undefined, parentId, reply);
      $scope.replyText = "";
      $scope.$parent.$parent.showReplyForm = false; // Скрываем форму после отправки комментария
    };

    $scope.closeForm = function () {
      $scope.$parent.$parent.showReplyForm = false;
    };
  },
});
