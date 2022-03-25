import Home from "./Home";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
}

export default App;
