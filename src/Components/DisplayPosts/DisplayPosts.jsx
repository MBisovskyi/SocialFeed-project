import "./DisplayPosts.css";

const DisplayPosts = (props) => {
  return (
    <div className="wrap">
      <div className="content-container">
        <div className="post-container name-text">Mykola Bisovskyi</div>
        <div className="post-container post-text">
          I love this project so far!
        </div>
      </div>
      <div className="likes-container">
        <img src="public/finger-up.svg" alt="asd" />
      </div>
    </div>
  );
};

export default DisplayPosts;
