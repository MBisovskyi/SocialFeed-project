import NavBar from "./Components/NavBar/NavBar";
import Background from "./Components/Background/Background";
import CreatePost from "./Components/CreatePost/CreatePost";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div>
        <CreatePost />
        <Background />
      </div>
    </div>
  );
}

export default App;
