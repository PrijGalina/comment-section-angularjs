import * as React from "react";
export const CommentCounter = (props) => {
  const { count } = props;
  return <h3>Количество комментариев: {count}</h3>;
};
