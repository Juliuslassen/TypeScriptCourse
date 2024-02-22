import { ObjectId } from "mongoose"

export type Library = {
    name: string,
    books?: [ObjectId?],
    createdAt?: Date
}