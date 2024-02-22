import { requestPaths } from "../../const";

export function CommentService($http, $q) {
  this.loading = false;
  this.commentsCount = 0;
  this.commentsList = [];

  this.getComments = function () {
    this.loading = true;
    let firstFakeRequest = $http.get(requestPaths.first_fake);
    let secondFakeRequest = $http.get(requestPaths.second_fake);
    let commentsRequest = $http.get(requestPaths.comments);

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
      .then((responses) => {
        let commentsResponse = responses[0];
        this.commentsList = commentsResponse.data;
        return commentsResponse;
      })
      .finally(
        function () {
          this.loading = false;
        }.bind(this)
      );
  };

  this.getLoadedComments = () => this.commentsList;

  this.addComment = (comments = this.commentsList, parentId, reply) => {
    for (let comment of comments) {
      console.log("comment", comment);
      if (comment.id === parentId) {
        comment.replies.push(reply);
        console.log("added? new array =", this.commentsList);
        return true;
      }
      if (comment.replies.length > 0) {
        const isAdded = this.addComment(comment.replies, parentId, reply);
        if (isAdded) {
          return true;
        }
      }
    }

    return false;
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
}
