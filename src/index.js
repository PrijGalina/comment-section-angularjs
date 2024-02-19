import "angular";
import "./components/angular-components/comment-counter-adapter/comment-counter-adapter.module";
import "./components/angular-components/comment-list/comment-list.module";
import "./components/angular-components/comment-item/comment-item.module";
import "./components/angular-components/app-header/app-header.module";
import "./components/angular-components/app-footer/app-footer.module";

angular
  .module("myApp", [
    "commentCounterAdapter",
    "commentList",
    "commentItem",
    "appHeader",
    "appFooter",
  ])
  .controller("MainController", [
    "$scope",
    function MainController($scope) {
      $scope.count = 0;
    },
  ])
  .service("CommentService", function ($http) {
    this.loading = false;
    this.commentsCount = 0;

    this.getComments = function () {
      this.loading = true;
      return $http
        .get("https://1d8c8445-040b-4f3e-98f7-9d961ae570da.mock.pstmn.io")
        .finally(
          function () {
            this.loading = false;
          }.bind(this)
        );
    };

    this.addComment = function (comment) {
      comments.push(comment);
    };

    this.removeComment = function (index) {
      comments.splice(index, 1);
    };

    this.getCommentsCount = function (comments) {
      let count = 0;

      if (!comments || comments.length === 0) {
        return count;
      }

      comments.forEach((comment) => {
        count++;
        count += this.getCommentsCount(comment.replies);
      });

      return count;
    };
  });
