import "angular";
import "./components/angular-components/comment-counter-adapter/comment-counter-adapter.module";
import "./components/angular-components/comment-list/comment-list.module";
import "./components/angular-components/comment-item/comment-item.module";
import "./components/angular-components/app-header/app-header.module";
import "./components/angular-components/app-footer/app-footer.module";
import "./components/angular-components/preloader/preloader.module";
import "./components/angular-components/reply-form/reply-form.module";

angular
  .module("myApp", ["commentCounterAdapter", "commentList", "commentItem", "appHeader", "appFooter", "preloader", "replyForm"])
  .controller("MainController", [
    "$scope",
    function MainController($scope) {
      $scope.commentsCount = 0;
    },
  ])
  .service("CommentService", function ($http, $q) {
    this.loading = false;
    this.commentsCount = 0;

    this.getComments = function () {
      this.loading = true;
      let firstFakeRequest = $http.get("https://1d8c8445-040b-4f3e-98f7-9d961ae570da.mock.pstmn.io/api/first-fake");
      let secondFakeRequest = $http.get("https://1d8c8445-040b-4f3e-98f7-9d961ae570da.mock.pstmn.io/api/second-fake");
      let commentsRequest = $http.get("https://1d8c8445-040b-4f3e-98f7-9d961ae570da.mock.pstmn.io/api/comments");

      function delayRequest(request) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            request.then(resolve).catch(reject);
          }, Math.floor(Math.random() * 2700) + 300);
        });
      }

      let firstFakeRequestPromise = delayRequest(firstFakeRequest);
      let secondFakeRequestPromise = delayRequest(secondFakeRequest);
      let commentsRequestPromise = delayRequest(commentsRequest);

      return $q
        .all([commentsRequestPromise, firstFakeRequestPromise, secondFakeRequestPromise])
        .then(function (responses) {
          let commentsResponse = responses[0];
          return commentsResponse;
        })
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
