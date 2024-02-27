import * as React from 'react';
import { getModifiedWord } from '../../../utils';

export const CommentCounter = (props) => {
  const { commentCount } = props;
  const modifiedWord = getModifiedWord(commentCount);

  return (
    <h3>
      {commentCount} {modifiedWord}
    </h3>
  );
};
