import template from "./comment-item.template.html";
import { avatarPaths } from "../../../const";

angular.module("commentItem", []).component("commentItem", {
  template: template,
  bindings: {
    comment: "<",
  },
  controller: function ($scope) {
    $scope.showReplyForm = false;
    $scope.commentId = null;

    this.avatarPaths = avatarPaths;

    this.addReplyToComment = (event, commentId) => {
      event.preventDefault();
      $scope.showReplyForm = true;
      $scope.commentId = commentId;
    };
  },
});
