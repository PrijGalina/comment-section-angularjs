import template from "./comment-list.template.html";

angular.module("commentList", []).component("commentList", {
  template,
  bindings: {
    commentsCount: "=",
  },
  controller: function ($scope, CommentService) {
    $scope.comments = [];

    $scope.$watch(
      () => CommentService.loading,
      (newVal, oldVal) => {
        $scope.loading = newVal;
      }
    );

    this.$onInit = () => {
      CommentService.getComments()
        .then((response) => {
          $scope.comments = response.data;
          this.commentsCount = CommentService.getCommentsCount(response.data);
        })
        .catch((error) => {
          console.error("Ошибка при получении комментариев:", error);
        });
    };
  },
});
