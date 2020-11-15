import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {registerServiceWorker} from './serviceWorker'
import GlobalProvider from "./context/index.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

registerServiceWorker()