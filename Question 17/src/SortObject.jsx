import React, { useState } from "react";

const SortObject = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 20 },
    { id: 3, name: "Charlie", age: 30 },
    { id: 4, name: "David", age: 22 }
  ]);

  const [sortBy, setSortBy] = useState("name");

  const sortUsers = () => {
    return [...users].sort((a, b) => {
      if (sortBy === "name") {
        return a.name > b.name ? 1 : -1;
      } else if (sortBy === "age") {
        return a.age - b.age;  
      }
    });
  };

  return (
    <div>
      <h2>User List</h2>
      <label>Sort by: </label>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Name</option>
        <option value="age">Age</option>
      </select>

      <ul>
        {sortUsers().map((user) => (
          <li key={user.id}>
            {user.name} - Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortObject;
