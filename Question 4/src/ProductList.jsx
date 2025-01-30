import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [users, setUsers] = useState();
    
    const fetchUsers = async () => {
        const data = await fetch('https://dummyjson.com/users');
        const json = await data.json();

        setUsers(json.users)
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    if(!users){
        return null
    }

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.firstName} {user.lastName}</li>
        ))}
      </ul>
    
    </div>
  )
}

export default ProductList
