import "angular";
import { CommentService } from "./services/comment-service";
import { AuthService } from "./services/auth-service";
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
  .service("CommentService", CommentService)
  .service("AuthService", AuthService);
