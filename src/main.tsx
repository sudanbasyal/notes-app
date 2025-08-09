import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import ReduxProvider from "./providers/ReduxProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </Router>
  </React.StrictMode>
);
