import { ObjectId } from 'mongoose'
import { Genre } from './GenreEnum'

export type Book = {
    title: string,
    author: ObjectId | undefined,
    library?: ObjectId,
    pages: Number,
    genre: Genre,
    createdAt?: Date
}