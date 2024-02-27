import { useEffect, useState } from "react";
import { User } from "../types/types";

export const useUserHook = () => {
    const [ users, setUsers ] = useState<User[]>([]);
  
    const fetchUsers = async () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }

    useEffect(() => {
        fetchUsers();
    }, []);
  
    return { users };
  };