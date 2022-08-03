import "./DisplayPosts.css";

const DisplayPosts = (props) => {
  return (
    <div>
      {props.parentPost.map((entry, index) => {
        return (
          <div key={index}>
            <p className="name-text">{entry.name}</p>
            <p className="post-text">{entry.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
