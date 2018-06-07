import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList.js";
import BasicExample from "./BasicExample.js"
import Routes from './Routes.js'

ReactDOM.render(
  <div>
    <Routes />
  </div>,
  document.getElementById('container')
);
