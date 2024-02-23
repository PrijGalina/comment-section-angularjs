import * as React from "react";
import { createRoot } from "react-dom/client";
import { CommentCounter } from "../../react-components/comment-counter";
import template from "./comment-counter-adapter.template.html";

angular.module("commentCounterAdapter", []).component("commentCounterAdapter", {
  template: template,
  bindings: {
    commentCount: "<",
  },
  controller: function () {
    const reactAppRootElem = document.getElementById("react-app");
    const reactAppRoot = createRoot(reactAppRootElem);

    this.$onInit = () => {
      reactAppRoot.render(
        React.createElement(CommentCounter, {
          commentCount: this.commentCount,
        })
      );
    };

    this.$onChanges = (changes) => {
      const { commentCount } = changes;

      reactAppRoot.render(
        React.createElement(CommentCounter, {
          commentCount: commentCount.currentValue,
        })
      );
    };
  },
});
