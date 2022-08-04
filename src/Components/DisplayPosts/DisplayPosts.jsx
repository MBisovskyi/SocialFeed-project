import "./DisplayPosts.css";
import LikeDislikeComponent from "../LikeDislikeComponent/LikeDislikeComponent";

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
              <LikeDislikeComponent />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
