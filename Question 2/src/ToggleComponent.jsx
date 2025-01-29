import React, { useState } from "react";

const ToggleComponent = () => {
  const [toggleTexts, setToggleTexts] = useState(false);

  const handleToggle = () => {
    setToggleTexts((prev) => !prev);
  };
  return (
    <div>
      <button onClick={handleToggle}>{toggleTexts ? "Hide" : "Show"}</button>
      {toggleTexts && (
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          quos.
        </h1>
      )}
    </div>
  );
};

export default ToggleComponent;
