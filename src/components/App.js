import video from "../data/video.js";
import Comments from "./Comments";
import Details from "./Details";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);
  const [visible, setVisible] = useState(true);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Details
        title={video.title}
        views={video.views}
        createdAt={video.createdAt}
        upvotes={video.upvotes}
        downvotes={video.downvotes}
      />
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Comments" : "Show Comments"}
      </button>
      {visible ? <Comments commentsNum={video.comments} /> : null}
    </div>
  );
}

export default App;
