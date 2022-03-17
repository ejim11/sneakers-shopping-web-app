import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import DisplayImageProvider from "./store/DisplayImageProvider";

ReactDOM.render(
  <React.StrictMode>
    <DisplayImageProvider>
      <App />
    </DisplayImageProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
