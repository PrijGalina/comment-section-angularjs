import * as React from "react";
import { createRoot } from "react-dom/client";
import template from "./comment-counter-adapter.template.html";
import { CommentCounter } from "../../react-components/сomment-сounter";

angular.module("commentCounterAdapter", []).component("commentCounterAdapter", {
  template: template,

  controller: function (CommentService) {
    const reactAppRootElem = document.getElementById("react-app");
    const reactAppRoot = createRoot(reactAppRootElem);
    const count = CommentService.getCommentsCount();

    reactAppRoot.render(
      React.createElement(CommentCounter, {
        count: count,
      })
    );
  },
});
