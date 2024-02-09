import axios, { AxiosError, AxiosResponse } from 'axios'

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: number;
    website: string;
    company: Company;
}

interface Address{
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Company{
    name: string;
    catchPhrase: string;
    bs: string;
}

async function getUserOne(): Promise<User | AxiosError> {
    const url: string = 'https://jsonplaceholder.typicode.com/users/1';

    try {
        const response: AxiosResponse<User> = await axios.get(url);
        const user: User = response.data;
        return user;
    } catch (error) {
        return error;
    }
}

async function getAllUsers(): Promise<User[] | AxiosError>{
    const url: string = 'https://jsonplaceholder.typicode.com/users';
    return await axios.get<User[]>(url)
    .then((response: AxiosResponse<User[]>) =>{
        const userArray: User[] = response.data;
        return userArray;
    })
    .catch((error: AxiosError) =>{
        return error
    })
}

function printTheUser(user: User): void{
    console.log("");
    console.log("Name: " + user.name);
    console.log("userName: " +user.username);
    console.log("email: " +user.email);
    console.log("phonenumber: " +user.phone);
    console.log("kasda: " + user.company.catchPhrase);
}

getUserOne().then((result) => {
    if (result instanceof Error) {
        console.error('Error:', result.message);
    } else {
        printTheUser(result);
    }
});


getAllUsers().then((result) =>{
    if(result instanceof Error) {
        console.log('Error:', result.message)
    } else {
        result.forEach(element => {
            printTheUser(element);
        });
    }
});
