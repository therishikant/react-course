import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Router } from "react-router-dom";
import PageRouter from "./PageRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <PageRouter></PageRouter>
  </React.StrictMode>
  </BrowserRouter>
);
