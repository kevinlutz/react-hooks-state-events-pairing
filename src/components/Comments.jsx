import Comment from "./Comment";
import { useState } from "react";

function Comments({ commentsNum }) {
  const [showComment, setShowComment] = useState(true);

  const commentList = commentsNum.map((comment) => {
    return (
      <>
        <Comment
          key={comment.id}
          user={comment.user}
          comment={comment.comment}
        />
        <button onClick={() => setShowComment(!showComment)}>
          Delete Comment
        </button>
      </>
    );
  });

  console.log(commentList);

  return (
    <>
      <h1>{commentsNum.length} Comments</h1>
      {commentList}
    </>
  );
}

export default Comments;
