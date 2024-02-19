import template from "./comment-list.template.html";

angular.module("commentList", []).component("commentList", {
  template,
  controller: ($scope, $element, $attrs, CommentService) => {
    $scope.comments = CommentService.getComments();
  },
});
