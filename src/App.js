import Home from "./Home";
import PostPage from "./PostPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/PostPage" exact>
        <PostPage />
      </Route>
    </div>
  );
}

export default App;
