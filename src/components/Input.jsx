import React from "react";

const Input = ({ value, onChange, type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
