import React from "react";

const Button = ({ disabled }) => {
  return (
    <div>
      <button onClick={() => alert("hiii")} disabled={disabled}>
        add
      </button>
    </div>
  );
};

export default Button;
