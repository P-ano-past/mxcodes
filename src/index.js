import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./client/App/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export const history = createBrowserHistory();

root.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
