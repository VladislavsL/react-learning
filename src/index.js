import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.css";
import state from "./redux/state";
import { BrowserRouter, Route } from "react-router-dom";

const root = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <App state={state} />
  </BrowserRouter>,
  root
);
