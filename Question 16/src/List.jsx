import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "./Redux/listSlice";

const List = () => {
  const [inputValue, setInputValue] = useState("");
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (inputValue.trim()) {
      dispatch(addItem({ name: inputValue }));
      setInputValue(""); 
    }
  };

  const handleDeleteItem = (index) => {
    dispatch(deleteItem(index)); 
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add</button>
      </div>
      {list.length === 0 ? (
        <h1>No Items Here</h1>
      ) : (
        list.map((item, index) => (
          <div style={{display : 'flex'}} key={index}>
            <h2>{item.name}</h2>
            <button onClick={() => handleDeleteItem(index)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default List;
