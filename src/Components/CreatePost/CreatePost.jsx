import "./CreatePost.css";

const CreatePost = (props) => {
  return (
    <div className="create-post-container">
      <div className="name-post-container">
        <p className="name-title">Name</p>
        <p className="post-title">Post</p>
      </div>
      <div className="text-areas-container">
        <div>
          <input className="name-input-area"></input>
        </div>
        <div>
          <textarea className="post-text-area"></textarea>
        </div>
      </div>
      <div className="button-container">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default CreatePost;
