import template from "./comment-item.template.html";
import { avatarPaths } from "../../../const";

angular.module("commentItem", []).component("commentItem", {
  template: template,
  bindings: {
    comment: "<",
  },
  controller: function ($scope, AuthService, CommentService, FormService) {
    $scope.commentId = null;
    //TODO: поправить кошмарное форматирование prettier в comment-item.template.html
    this.avatarPaths = avatarPaths;
    this.userId = $scope.userName = AuthService.getUserId();

    $scope.$watch(
      () => FormService.openForm,
      (newVal, oldVal) => {
        $scope.openForm = newVal;
      }
    );

    this.addReplyToComment = (event, commentId) => {
      event.preventDefault();
      if (FormService.isOpen()) {
        FormService.close();
      }
      FormService.open(commentId);
      $scope.commentId = commentId;
    };

    this.deleteComment = (event, commentId) => {
      event.preventDefault();
      CommentService.removeComment(undefined, commentId);
      CommentService.setCommentCount(CommentService.getCurrentCommentCount() - 1);
    };

    this.editComment = (event, comment) => {
      event.preventDefault();
      FormService.open(comment.id);
      $scope.comment = comment;
      $scope.commentId = comment.id;
    };
  },
});
