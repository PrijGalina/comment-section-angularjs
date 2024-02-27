import template from './reply-form.template.html';
import { generateUniqueId } from '../../../utils';
import { typeReply } from '../../../const';

angular.module('replyForm', []).component('replyForm', {
  template,
  controller: function ($scope, AuthService, CommentService, FormService) {
    this.value = $scope.$parent.$parent.comment?.comment || '';
    this.type = typeReply.add;

    if (this.value !== '') {
      $scope.replyText = this.value;
      this.type = typeReply.edit;
    }

    $scope.addReply = (event) => {
      event.preventDefault();
      const parentId = $scope.$parent.$parent.commentId;
      const reply = {
        id: generateUniqueId(),
        autor: {
          id: AuthService.getUserId(),
          name: AuthService.getUserName(),
          gender: AuthService.getUserGender()
        },
        comment: $scope.replyText,
        date: new Date().toISOString(),
        replies: []
      };
      CommentService.addComment(undefined, parentId, reply);
      CommentService.setCommentCount(CommentService.getCurrentCommentCount() + 1);
      $scope.replyText = '';
      FormService.close();
    };

    $scope.editReply = (event) => {
      event.preventDefault();
      const commentId = $scope.$parent.$parent.commentId;
      const comment = $scope.$parent.$parent.comment;
      CommentService.editComment(undefined, commentId, comment, $scope.replyText);
      $scope.replyText = '';
      FormService.close();
    };

    $scope.closeForm = () => {
      FormService.close();
    };
  }
});
