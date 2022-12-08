import React, { useContext } from "react";
import { TodoContext } from "../todo/Todo";
import "./todoItem.css";
const TodoItem = ({ obj }) => {
  const { onDelete, updateTodoItemCompleted } = useContext(TodoContext);
  const onItemComplete = () => {
    updateTodoItemCompleted({
      ...obj,
      completed: !obj.completed,
    });
  };

  const onItemDelete = () => {
    onDelete(obj);
  };

  return (
    <div className="todoItem">
      <span className={!obj.completed ? "text unChecked" : "text checked"}>
        {obj.text}
      </span>
      <div className="btnBlock">
        <button
          onClick={onItemComplete}
          className="chechBTn bi bi-check-square"
        />
        <button className="clearBtn" onClick={onItemDelete}>
          X
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
