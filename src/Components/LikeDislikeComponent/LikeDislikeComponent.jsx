import "./LikeDislikeComponent.css";
import like from "./assets/thumb-up.png";
import dislike from "./assets/thumb-down.png";
import React, { useState } from "react";

const LikeDislikeComponent = (props) => {
  const [likeButtonClass, setLikeButtonClass] = useState("like-inactive");
  const [dislikeButtonClass, setDislikeButtonClass] =
    useState("dislike-inactive");

  function likeClassHandleClick() {
    if (likeButtonClass === "like-inactive") {
      setLikeButtonClass("like-active");
      setDislikeButtonClass("dislike-inactive");
    } else {
      setLikeButtonClass("like-inactive");
    }
  }

  function dislikeClassHandleClick() {
    if (dislikeButtonClass === "dislike-inactive") {
      setDislikeButtonClass("dislike-active");
      setLikeButtonClass("like-inactive");
    } else {
      setDislikeButtonClass("dislike-inactive");
    }
  }

  return (
    <div className="like-dislike-wrap">
      <button onClick={likeClassHandleClick} className={likeButtonClass}>
        <img src={like} alt="Like" />
      </button>
      <button onClick={dislikeClassHandleClick} className={dislikeButtonClass}>
        <img src={dislike} alt="Dislike" />
      </button>
    </div>
  );
};

export default LikeDislikeComponent;
