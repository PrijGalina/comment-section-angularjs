import template from "./comment-item.template.html";
import { avatarPaths } from "../../../const";

angular.module("commentItem", []).component("commentItem", {
  template: template,
  bindings: {
    comment: "<",
  },
  controller: function ($scope, AuthService, CommentService) {
    $scope.showReplyForm = false;
    $scope.commentId = null;
    //TODO: поправить кошмарное форматирование prettier в comment-item.template.html
    this.avatarPaths = avatarPaths;
    this.userId = $scope.userName = AuthService.getUserId();

    this.addReplyToComment = (event, commentId) => {
      event.preventDefault();
      $scope.showReplyForm = true;
      $scope.commentId = commentId;
    };

    this.deleteComment = (event, commentId) => {
      event.preventDefault();
      CommentService.removeComment(undefined, commentId);
      CommentService.setCommentCount(CommentService.getCurrentCommentCount() - 1);
    };

    //TODO: РЕАЛИЗОВАТЬ editComment + disable buttons + close another addreply form
    this.editComment = (event, comment) => {
      event.preventDefault();
      $scope.showReplyForm = true;
      $scope.comment = comment;
    };
  },
});
