import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = (props) => {
  const [userName, setUserName] = useState("");
  const [userText, setUserText] = useState("");
  const [dateTime, setDateTime] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      postDate: Date(),
      name: userName,
      text: userText,
    };
    console.log(newPost);
    props.createNewPostProperty(newPost);
  }

  return (
    <form onSubmit={handleSubmit} className="wrap">
      <div className="left-container">
        <div className="name-container">
          <label className="label-font">Name</label>
        </div>
        <div className="post-container">
          <label className="label-font">Post</label>
        </div>
      </div>
      <div className="middle-container">
        <p
          type="date"
          onChange={(event) => setDateTime(event.target.value)}
          value={dateTime}
        ></p>
        <textarea
          type="text"
          className="name-input-field input-field-style"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></textarea>
        <textarea
          type="text"
          className="post-input-field input-field-style"
          value={userText}
          onChange={(event) => setUserText(event.target.value)}
        ></textarea>
      </div>
      <div className="right-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default CreatePost;
