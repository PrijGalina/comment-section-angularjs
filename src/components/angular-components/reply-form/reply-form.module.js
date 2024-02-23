import template from "./reply-form.template.html";
import { generateUniqueId } from "../../../utils";

angular.module("replyForm", []).component("replyForm", {
  template,
  controller: function ($scope, AuthService, CommentService) {
    $scope.addReply = (event) => {
      event.preventDefault();
      const parentId = $scope.$parent.$parent.commentId;
      const reply = {
        id: generateUniqueId(),
        autor: {
          id: AuthService.getUserId(),
          name: AuthService.getUserName(),
          gender: AuthService.getUserGender(),
        },
        comment: $scope.replyText,
        date: new Date().toISOString(),
        replies: [],
      };
      CommentService.addComment(undefined, parentId, reply);
      $scope.replyText = "";
      $scope.$parent.$parent.showReplyForm = false;
    };

    $scope.closeForm = () => {
      $scope.$parent.$parent.showReplyForm = false;
    };
  },
});
