import NavBar from "./Components/NavBar/NavBar";
import CreatePost from "./Components/CreatePost/CreatePost";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [postEntries, setPostEntries] = useState([]);

  function addNewPost(entry) {
    let userEntries = [...postEntries, entry];
    setPostEntries(userEntries);
  }

  return (
    <div>
      <NavBar />
      <CreatePost createNewPostProperty={addNewPost} />
      <div>
        <DisplayPosts parentPost={postEntries} />
      </div>
    </div>
  );
}

export default App;
