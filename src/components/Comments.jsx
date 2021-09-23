import Comment from "./Comment";

function Comments({ commentsNum }) {
  const commentList = commentsNum.map((comment) => {
    return (
      <Comment key={comment.id} user={comment.user} comment={comment.comment} />
      
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
