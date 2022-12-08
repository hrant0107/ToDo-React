import React, { useContext, useMemo } from "react";
import { TodoContext } from "../todo/Todo";
import TodoItem from "../todoItem/TodoItem";
import "../todoList/todoList.css";
const TodoList = () => {
  const { filter, data } = useContext(TodoContext);

  const filteredData = useMemo(() => {
    if (filter.value === "all") {
      return [...data].filter((obj) => obj);
    } else if (filter.value === "checked") {
      return [...data].filter((obj) => obj.completed);
    } else if (filter.value === "unChecked") {
      return [...data].filter((obj) => !obj.completed);
    }
  }, [filter, data]);

  return (
    <div className="todoList">
      {filteredData.map((obj) => {
        return <TodoItem key={obj.id} obj={obj} />;
      })}
    </div>
  );
};

export default TodoList;
