import "./DisplayPosts.css";

const DisplayPosts = (props) => {
  return (
    <div className="display-posts-wrap">
      {props.parentPost.map((entry, index) => {
        return (
          <div key={index} className="post-entries">
            <p className="name-text">{entry.name}</p>
            <p className="post-text">{entry.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
