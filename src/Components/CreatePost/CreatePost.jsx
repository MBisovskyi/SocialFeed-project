import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = (props) => {
  const [userName, setUserName] = useState("");
  const [userText, setUserText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
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
    // <div className="container">
    //   <div className="create-post-container">
    //     <div className="name-post-container">
    //       <p className="name-title">Name</p>
    //       <p className="post-title">Post</p>
    //     </div>
    //     <div className="text-areas-container">
    //       <div>
    //         <input className="name-input-area"></input>
    //       </div>
    //       <div>
    //         <textarea className="post-text-area"></textarea>
    //       </div>
    //     </div>
    //     <div className="button-container">
    //       <button>Submit</button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CreatePost;
