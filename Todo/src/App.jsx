import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  function handleTodoChange(e) {
    setValue(e.target.value);
    console.log(value);
  }

  function addTodo() {
    let todoToAdd = { name: value, id: Math.floor(Math.random() * 10) };
    setTodos([...todos, todoToAdd]);
    setValue(" ");
    console.log(todoToAdd);
  }

  function deleteTodo(id) {
    const updatedTodos = todos.filter(function (todo) {
      if (todo.id !== id) {
        return true;
      } else {
        return false;
      }
    });

    setTodos(updatedTodos);
  }

  return (
    <div>
      <input value={value} type="text" onChange={handleTodoChange} />
      <button onClick={addTodo}>Add</button>

      <h2>All Todos</h2>
      {todos.map((todo) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <p>{todo.name}</p>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;
