import * as React from "react";
export const CommentCounter = (props) => {
  const { commentsCount } = props;
  let modifiedWord = "";

  if (commentsCount % 10 === 1 && commentsCount % 100 !== 11) {
    modifiedWord = "комментарий";
  } else if (commentsCount % 10 >= 2 && commentsCount % 10 <= 4 && (commentsCount % 100 < 10 || commentsCount % 100 >= 20)) {
    modifiedWord = "комментария";
  } else {
    modifiedWord = "комментариев";
  }

  return (
    <h3>
      {commentsCount} {modifiedWord}
    </h3>
  );
};
