import React, { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    if (input === "") {
      console.log("please add something");
    } else {
      setTodos([...todos, { todoName: input, status: "incomplete" }]);
      setInput("");
    }
  };

  const handleTodoStatus = (i) => {
    setTodos(
      todos.map((todo, index) =>
        index === i
          ? {
              ...todo,
              status: todo.status === "incomplete" ? "completed" : "incomplete",
            }
          : todo
      )
    );
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <input value={input} onChange={handleInputChange} type="text" />
      <button onClick={addTodo}>Add</button>
      {todos.map((todo, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "50px",
          }}
        >
          <h1
            style={{
              textDecoration:
                todo.status === "completed" ? "line-through" : "none",
            }}
          >
            {todo.todoName}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <button onClick={() => handleTodoStatus(index)}>
              {todo.status === "completed" ? "Done👍" : "Mark as complete✅"}
            </button>
            <button
              onClick={() => handleDeleteTodo(index)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Delete Todo
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
