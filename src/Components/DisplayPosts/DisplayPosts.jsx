import "./DisplayPosts.css";
import thumbUp from "./assets/thumb-up.png";
import thumbDown from "./assets/thumb-down.png";

const DisplayPosts = (props) => {
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
                <button type="submit" className="like-button liked">
                  <img src={thumbUp} alt="Thumb up" />
                </button>
              </div>
              <div className="thumb-down">
                <button type="submit" className="dislike-button disliked">
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
