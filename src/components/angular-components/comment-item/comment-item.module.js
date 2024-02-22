import template from "./comment-item.template.html";

angular.module("commentItem", []).component("commentItem", {
  template: template,
  bindings: {
    comment: "<",
  },
  controller: function ($scope) {
    $scope.showReplyForm = false;
    $scope.commentId = null;

    this.addReplyToComment = function (event, commentId) {
      event.preventDefault();
      $scope.showReplyForm = true;
      $scope.commentId = commentId;
      console.log("click", commentId);
    };
  },
});
