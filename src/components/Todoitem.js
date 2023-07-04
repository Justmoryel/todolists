import React from "react";

const Todoitem = (props) => {
  const { index, value, btnDelete } = props;
  return (
    <div className="todolist-task-wrapper">
      <div>{value}</div>
      <div className="todolist-func-btn">
        <button>EDIT</button>
        <button onClick={() => btnDelete(index)}>DELETE</button>
      </div>
    </div>
  );
};
export default Todoitem;
