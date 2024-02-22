import { ObjectId } from 'mongoose'

export type Author = {
    name: string,
    age: number,
    books?: [ObjectId?],
    createdAt?: Date 
}