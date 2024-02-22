import * as React from "react";
import { createRoot } from "react-dom/client";
import template from "./comment-counter-adapter.template.html";
import { CommentCounter } from "../../react-components/сomment-сounter";

angular.module("commentCounterAdapter", []).component("commentCounterAdapter", {
  template: template,
  bindings: {
    commentsCount: "<",
  },
  controller: function ($scope, CommentService) {
    const reactAppRootElem = document.getElementById("react-app");
    const reactAppRoot = createRoot(reactAppRootElem);

    this.$onInit = function () {
      reactAppRoot.render(
        React.createElement(CommentCounter, {
          commentsCount: this.commentsCount,
        })
      );
    };

    this.$onChanges = function (changes) {
      const { commentsCount } = changes;

      reactAppRoot.render(
        React.createElement(CommentCounter, {
          commentsCount: commentsCount.currentValue,
        })
      );
    };
  },
});
