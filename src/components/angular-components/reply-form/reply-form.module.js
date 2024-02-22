import template from "./reply-form.template.html";

angular.module("replyForm", []).component("replyForm", {
  template,
  controller: function ($scope) {
    //$scope.showReplyForm = false;

    $scope.addReply = function (event) {
      event.preventDefault();
      console.log("commentId = ", $scope.$parent.$parent.commentId);
      console.log("newReply = ", $scope.newReply);
      //$scope.newReply = "";
      //$scope.$parent.$parent.showReplyForm = false; // Скрываем форму после отправки комментария
    };

    $scope.closeForm = function () {
      $scope.$parent.$parent.showReplyForm = false;
      console.log("close", $scope.$parent.$parent);
    };
  },
});
