import React, { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Grapes",
    "Mango",
    "Orange",
    "Pineapple",
    "Watermelon",
    "Strawberry",
    "Cherry",
    "Peach",
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };

  const getHighlightedText = (item, highlight) => {
    const parts = item.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight ? (
        <span key={index} style={{ backgroundColor: "yellow" }}>
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const filterItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue)
  );

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type to search..."
      />
      {filterItems.map((item, index) => (
        <h3 key={index}>{getHighlightedText(item, inputValue)}</h3>
      ))}
    </div>
  );
};

export default Search;
