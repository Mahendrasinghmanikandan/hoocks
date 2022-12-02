import React, { useState } from "react";

const Example1 = () => {
  const [click, setClick] = useState(0);

  const handleClick = (data) => {
    setClick(data === "Increment" ? click + 1 : click - 1);
  };

  return (
    <div className="display">
      <h1>{click}</h1>
      <div className="display2">
        <button className="button-1" onClick={() => handleClick("Increment")}>
          Increment
        </button>
        <button className="button-1" onClick={() => handleClick("Decrement")}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Example1;
