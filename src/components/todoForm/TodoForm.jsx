import React, { useContext } from "react";
import { useState } from "react";
import { TodoContext } from "../todo/Todo";
import "../todoForm/todoform.css";
const TodoForm = () => {
  const { onChange } = useContext(TodoContext);
  const [inputValue, setInputValue] = useState("");

  const onSubtit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onChange(inputValue);
    }
    setInputValue("");
  };

  const onChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={onSubtit} className="todoForm">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={onChangeInput}
      />
      <button className="formBtn" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
