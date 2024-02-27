import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
}

export const GetUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Simulating data fetching from an API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return <UserList users={users} />;
}

const UserList: React.FC <{users: User[]}> = ({users}) => {

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};


