import React, { useState } from "react";
import "./DisplayPosts.css";
import thumbUp from "./assets/thumb-up.png";
import thumbDown from "./assets/thumb-down.png";

const DisplayPosts = (props) => {
  const [likeButton, setLikeButton] = useState("neutral-status");
  const [dislikeButton, setDislikeButton] = useState("neutral-status");

  function likeHandleClick() {
    if (likeButton === "neutral-status") {
      setLikeButton("liked-status");
      setDislikeButton("neutral-status");
    } else {
      setLikeButton("neutral-status");
    }
  }

  function dislikeHandleClick() {
    if (dislikeButton === "neutral-status") {
      setDislikeButton("disliked-status");
      setLikeButton("neutral-status");
    } else {
      setDislikeButton("neutral-status");
    }
  }

  return (
    <div className="display-posts-wrap">
      {props.parentPost.map((entry, index) => {
        return (
          <div key={index} className="post-entries">
            <div className="text-field">
              <p className="name-text">{entry.name}</p>
              <p className="post-text">{entry.text}</p>
            </div>
            <div className="likes-container">
              <div className="thumb-up">
                <button onClick={likeHandleClick} className={likeButton}>
                  <img src={thumbUp} alt="Thumb up" />
                </button>
              </div>
              <div className="thumb-down">
                <button onClick={dislikeHandleClick} className={dislikeButton}>
                  <img src={thumbDown} alt="Thumb down" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
