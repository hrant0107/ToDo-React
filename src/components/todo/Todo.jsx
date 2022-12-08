import React, { useCallback, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { filterOptions } from "../../constants/filterOptions";
import Select from "../Select/Select";
import "../todo/todo.css";
import TodoForm from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

export const TodoContext = React.createContext({});

const Todo = () => {
  const values = localStorage.getItem("List");
  const [data, setData] = useState(JSON.parse(values));
  const [filter, setFilter] = useState(filterOptions[0]);

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(data));
  }, [data]);

  const updateTodoItemCompleted = useCallback(
    (todoItem) => {
      setData(
        data.map((item) => {
          if (item.id === todoItem.id) {
            return todoItem;
          }
          return item;
        })
      );
    },
    [data]
  );
  const onChange = (value) => {
    setData([
      ...data,
      {
        text: value,
        id: uuidv4(),
        completed: false,
      },
    ]);
  };

  const onDelete = (value) => {
    setData(data.filter((obj) => obj.id !== value.id));
  };

  return (
    <TodoContext.Provider
      value={{
        setFilter,
        filter,
        onChange,
        data,
        onDelete,
        updateTodoItemCompleted,
      }}
    >
      <div className="todo">
        <div className="first">
          <TodoForm />
          <Select />
        </div>
        <TodoList />
        {data.length && filter.value === "all" ? (
          <div className="todobtn">
            <button onClick={() => setData([])} className="TodoBtnClearAll">
              Clear All
            </button>
          </div>
        ) : null}
      </div>
    </TodoContext.Provider>
  );
};

export default Todo;
