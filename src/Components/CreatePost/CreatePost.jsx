import React, { useState, useEffect } from "react";
import "./CreatePost.css";

const CreatePost = (props) => {
  const [userName, setUserName] = useState("");
  const [userText, setUserText] = useState("");
  const [dateTime, setDateTime] = useState("");
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setUserName("");
    setUserText("");
    setDateTime("");
  }, [props.createNewPostProperty]);

  let newDate = new Date();
  let monthName = month[newDate.getMonth()];
  let day = newDate.getDate();
  let year = newDate.getFullYear();
  let hours = newDate.getHours();
  let minutes = newDate.getMinutes();
  let formattedMinutes = addZeroToMinutes(minutes);
  let formattedTime = twelveHoursTimeFormatter(hours, formattedMinutes);

  function addZeroToMinutes(minutes) {
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes;
  }

  function twelveHoursTimeFormatter(hours, minutes) {
    if (hours > 12) {
      hours = hours - 12;
      return `${hours}:${minutes} PM`;
    } else {
      return `${hours}:${minutes} AM`;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      postDate: `Post added: ${monthName} ${day} ${year} at ${formattedTime}`,
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
        <input
          minLength="4"
          required
          type="text"
          className="name-input-field input-field-style"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        ></input>
        <textarea
          required
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
