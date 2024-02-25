import { requestPaths } from "../../const";

const commentService = angular.module("myApp.commentServices", []);

commentService.service("CommentService", function ($http, $q) {
  this.loading = false;
  this.commentCount = 0;
  this.commentsList = [];

  this.getComments = () => {
    this.loading = true;
    let firstFakeRequest = $http.get(requestPaths.first_fake);
    let secondFakeRequest = $http.get(requestPaths.second_fake);
    let commentsRequest = $http.get(requestPaths.comments);

    const delayRequest = (request) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          request.then(resolve).catch(reject);
        }, Math.floor(Math.random() * 2700) + 300);
      });

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
      if (comment.id === parentId) {
        comment.replies.push(reply);
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

  this.getCurrentCommentCount = () => this.commentCount;

  this.getCommentCount = (comments) => {
    let count = 0;

    if (!comments || comments.length === 0) {
      return count;
    }

    comments.forEach((comment) => {
      count++;
      count += this.getCommentCount(comment.replies);
    });

    return count;
  };

  this.setCommentCount = (value) => {
    this.commentCount = value;
  };

  this.removeComment = (comments = this.commentsList, id) => {
    comments.forEach((comment, index) => {
      if (comment.id === id) {
        comments.splice(index, 1);
      } else {
        this.removeComment(comment.replies, id);
      }
    });
  };

  this.editComment = (comments = this.commentsList, id, reply, newText) => {
    comments.forEach((comment, index) => {
      if (comment.id === id) {
        comments.splice(index, 1);
        const newReply = {
          ...comment,
          comment: newText,
          date: new Date().toISOString(),
        };
        comments.push(newReply);
      } else {
        this.editComment(comment.replies, id, reply, newText);
      }
    });
  };

  return this;
});
