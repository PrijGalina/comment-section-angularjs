import template from "./comment-list.template.html";

angular.module("commentList", []).component("commentList", {
  template,
  bindings: {
    commentCount: "=",
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
          this.commentCount = CommentService.getCommentCount(response.data);
          CommentService.setCommentCount(this.commentCount);
        })
        .catch((error) => {
          console.error("Ошибка при получении комментариев:", error);
        });
    };
  },
});
