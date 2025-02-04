import React, { useEffect, useState } from "react";

const DebounceSearch = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      let data = await fetch("https://dummyjson.com/users");
      let json = await data.json();
      setUsers(json.users);
      setSearchedUsers(json.users); 
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filteredUsers = users.filter((user) =>
        user.firstName.toLowerCase().includes(inputValue.toLowerCase())
      );
      setSearchedUsers(filteredUsers);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputValue, users]);

  return (
    <div>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search users..."
      />
      {searchedUsers.length > 0 &&
        searchedUsers.map((user) => <h1 key={user.id}>{user.firstName}</h1>)}
    </div>
  );
};

export default DebounceSearch;
