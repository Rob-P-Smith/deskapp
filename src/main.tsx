import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/app/app";
import "./main.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <h2>h2 from main.tsx</h2>
    <App />
  </React.StrictMode>
);
