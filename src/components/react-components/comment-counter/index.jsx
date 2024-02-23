import * as React from "react";
import { getModifiedWord } from "../../../utils";

export const CommentCounter = (props) => {
  const { commentsCount } = props;
  const modifiedWord = getModifiedWord(commentsCount);

  return (
    <h3>
      {commentsCount} {modifiedWord}
    </h3>
  );
};
