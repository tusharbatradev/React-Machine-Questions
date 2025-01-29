import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <button
        style={{ backgroundColor: "black", color: "white", height: "50px" }}
        onClick={() => setCount((count += 1))}
      >
        +
      </button>
      <h1>{count}</h1>
      <button
        style={{ backgroundColor: "black", color: "white", height: "50px" }}
        onClick={() => setCount((count -= 1))}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
