import template from './comment-list.template.html';

angular.module('commentList', []).component('commentList', {
  template,
  controller: function ($scope, CommentService) {
    $scope.comments = [];

    $scope.$watch(
      () => CommentService.loading,
      (newVal) => {
        $scope.loading = newVal;
      }
    );

    this.$onInit = () => {
      CommentService.getComments()
        .then((response) => {
          $scope.comments = response.data;
          CommentService.setCommentCount(CommentService.getCommentCount(response.data));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.error('Ошибка при получении комментариев:', error);
        });
    };
  }
});
