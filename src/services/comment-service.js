angular.module("myApp").service("CommentService", function () {
  const comments = [
    {
      autor: "Вася",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
      replies: [
        {
          autor: "Петя",
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
    return comments;
  };

  this.addComment = function (comment) {
    comments.push(comment);
  };

  this.removeComment = function (index) {
    comments.splice(index, 1);
  };

  this.getCommentsCount = function () {
    return comments.length;
  };
});
