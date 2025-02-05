import React, { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <div
      style={{
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      <button
        style={{
          backgroundColor: darkMode ? "white" : "black",
          color : darkMode ? "black" : "white",
        }}
        onClick={handleMode}
      >
        {darkMode ? "Light" : "Dark"}
      </button>
      <p
        style={{
          color: darkMode ? "white" : "black",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ad
        dolorum quos numquam quaerat accusantium, sit minus nemo eaque, ducimus
        consectetur tenetur vero est iusto, assumenda odio molestias porro
        aliquam.
      </p>
    </div>
  );
};

export default DarkModeToggle;
