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
  .controller("MainController", ["$scope", function MainController($scope) {}])
  .service("CommentService", function () {
    const allComments = [
      {
        autor: "Вася",
        message:
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
        replies: [
          {
            autor: "Петя",
            message:
              "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
            replies: [
              {
                autor: "Sasha",
                message:
                  "And expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
                replies: [],
              },
            ],
          },
          {
            autor: "Dasha",
            message:
              "No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.",
            replies: [],
          },
        ],
      },
      {
        autor: "Маша",
        message:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. ",
        replies: [],
      },
    ];

    this.getComments = function () {
      return allComments;
    };

    this.addComment = function (comment) {
      comments.push(comment);
    };

    this.removeComment = function (index) {
      comments.splice(index, 1);
    };

    this.getCommentsCount = function (comments = allComments) {
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
