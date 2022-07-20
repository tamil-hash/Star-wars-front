import React from "react";
import ReactDOM from "react-dom/client";

//stylesheet
import "antd/dist/antd.min.css";
import "index.css";

//components
import App from "App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
