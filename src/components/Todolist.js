import React, { useState } from "react";
import Todoitem from "./Todoitem";

const Todolist = () => {
  //Using hooks to set User input text
  const [text, setText] = useState({
    input: "",
    displayTask: [],
  });

  // Destructuring object
  const { input, displayTask } = text;

  // Reading and Capturing User input
  const handleOnchangeInput = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };
  // Add Function to display
  const handleOnclickAdd = () => {
    if (input !== "") {
      const lists = displayTask;
      lists.push(input);
      setText({ input: "", displayTask: lists });
    } else {
      alert("Please tell me you did click without context?");
    }
  };

  //Event listner keyboard 'Enter' function
  const handlePresskey = (e) => {
    if (e.key === "Enter" && input !== "") {
      const lists = displayTask;
      lists.push(input);
      setText({ input: "", displayTask: lists });
    } else if (e.key === "Enter" && input === "") {
      alert("For the love of God Put some text");
    }
  };

  //Delete Function
  const handleOnclickDelete = (index) => {
    const lists = displayTask;
    lists.splice(index, 1);
    setText({ input: "", displayTask: lists });
  };

  return (
    <div className="todolist-container">
      <div className="todolist-header">
        <h1>To do list</h1>
      </div>

      <div className="todolist-input-wrapper">
        <input
          onKeyDown={handlePresskey}
          type="text"
          value={input}
          name="input"
          onChange={handleOnchangeInput}
          placeholder="Input new task..."
        />
        <button value={text} onClick={handleOnclickAdd}>
          ADD
        </button>
      </div>
      {displayTask.length ? (
        displayTask.map((value, index) => (
          <Todoitem
            key={index}
            value={value}
            index={index}
            btnDelete={handleOnclickDelete}
          />
        ))
      ) : (
        <span>No Task Found</span>
      )}
    </div>
  );
};
export default Todolist;
