import React from 'react';
import { User } from './types/types';
import { useUserHook } from './hooks/userHook';

export const JLComponent: React.FC = () => {

     const { users }: { users: User[] } = useUserHook();

    return (
        <div className="user-list-container">
        <h2 className="user-list-heading">User List</h2>
        <ul className="user-list">
            {users.map((user: User) => (
                <li key={user.id} className="user-item">{user.name}</li>
            ))}
        </ul>
    </div>
    );
};


