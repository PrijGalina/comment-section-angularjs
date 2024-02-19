import * as React from "react";
export const CommentCounter = (props) => {
  const { count } = props;
  let modifiedWord = "";
  if (count % 10 === 1 && count % 100 !== 11) {
    modifiedWord = "комментарий";
  } else if (
    count % 10 >= 2 &&
    count % 10 <= 4 &&
    (count % 100 < 10 || count % 100 >= 20)
  ) {
    modifiedWord = "комментария";
  } else {
    modifiedWord = "комментариев";
  }

  return (
    <h3>
      {count} {modifiedWord}
    </h3>
  );
};
