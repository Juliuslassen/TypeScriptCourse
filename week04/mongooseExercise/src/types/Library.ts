import { ObjectId } from "mongodb";


export interface Library  {
    _id: ObjectId,
    name: string,
    books?: [ObjectId?],
    createdAt?: Date
}