import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //index.css 파일 사용(css적용)
import App from "./App";
import { BrowserRouter } from "react-router-dom";
//리덕스를 가져오는 import
import { Provider } from "react-redux";
//스토어를 가져오는 import
import store from "./redux/configStore";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
