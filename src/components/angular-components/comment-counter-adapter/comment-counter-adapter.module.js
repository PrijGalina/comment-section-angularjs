import * as React from "react";
import { createRoot } from "react-dom/client";
import { CommentCounter } from "../../react-components/comment-counter";
import template from "./comment-counter-adapter.template.html";

angular.module("commentCounterAdapter", []).component("commentCounterAdapter", {
  template: template,
  controller: function ($scope, CommentService) {
    const reactAppRootElem = document.getElementById("react-app");
    const reactAppRoot = createRoot(reactAppRootElem);
    $scope.$watch(
      () => CommentService.commentCount,
      (newVal, oldVal) => {
        reactAppRoot.render(
          React.createElement(CommentCounter, {
            commentCount: newVal,
          })
        );
      }
    );
  },
});
