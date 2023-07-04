import "./styles/main.scss";
import "./styles/todolist.scss";
import React, { useState } from "react";
import Todolist from "./components/Todolist";

function App() {
  return (
    <div className="app-container">
      <Todolist></Todolist>
    </div>
  );
}

export default App;
