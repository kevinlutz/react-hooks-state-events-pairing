import { useState } from "react";

function Details({ title, views, createdAt, upvotes, downvotes }) {
  const [countUp, setCountUp] = useState(upvotes);
  const [countDown, setCountDown] = useState(downvotes);

  return (
    <>
      <h1>{title}</h1>
      <span>{`${views} Views`}</span>
      <span>{" | "}</span>
      <span>{`Uploaded: ${createdAt}`}</span>
      <br></br>
      <button onClick={() => setCountUp((someValue) => someValue + 1)}>
        {countUp} 👍
      </button>
      <button onClick={() => setCountDown((countDown) => countDown + 1)}>
        {countDown} 👎
      </button><br />

      
    </>
  );
}
export default Details;
