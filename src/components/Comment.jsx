import { useState } from "react"

function Comment({ user, comment }) {
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(0);
  const [showComment, setShowComment] = useState(true)
  return (
    <>
      <h2>{user}</h2>
      <h3>{comment}</h3>
      <button onClick={() => setCountUp((countUp) => countUp + 1)}>
        {countUp} 👍
      </button>
      <button onClick={() => setCountDown((countDown) => countDown + 1)}>
        {countDown} 👎
      </button>
      <button onClick={() => setShowComment(!showComment)}>Delete Comment</button>
    </>
  );
}

export default Comment;
