import React, { useContext } from "react";
import ReactSelect from "react-select";
import { filterOptions } from "../../constants/filterOptions";
import { TodoContext } from "../todo/Todo";
import "./completed.css";

const Select = React.memo(() => {
  const { filter, setFilter } = useContext(TodoContext);
  return (
    <div className="completed__block">
      <ReactSelect
        className="select"
        classNamePrefix="asd"
        onChange={setFilter}
        value={filter}
        options={filterOptions}
      />
    </div>
  );
});

export default Select;
