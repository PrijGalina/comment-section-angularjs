import template from "./comment-list.template.html";

angular.module("commentList", []).component("commentList", {
  template,
  bindings: {
    commentsCount: "=",
  },
  controller: function ($scope, $element, $attrs, CommentService) {
    $scope.comments = [];

    $scope.$watch(
      function () {
        return CommentService.loading;
      },
      function (newVal, oldVal) {
        $scope.loading = newVal;
      }
    );

    this.$onInit = function () {
      CommentService.getComments()
        .then((response) => {
          $scope.comments = response.data;
          this.commentsCount = CommentService.getCommentsCount(response.data);
        })
        .catch(function (error) {
          console.error("Ошибка при получении комментариев:", error);
        });
    };
  },
});
