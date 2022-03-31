import Home from "./Home";
import PostPage from "./PostPage";
import Edit from "./Edit";
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
      <Route path="/Edit/:post_index" exact>
        <Edit />
      </Route>
    </div>
  );
}

export default App;
