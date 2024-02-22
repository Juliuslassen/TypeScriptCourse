import { ObjectId } from "mongodb";


export interface Author {
    _id: ObjectId,
    name: string,
    age: number,
    books?: [ObjectId],
    createdAt?: Date 
}