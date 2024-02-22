
import { ObjectId } from 'mongodb'
import { Genre } from './GenreEnum'
import { Document } from 'mongoose'

export interface Book extends Document {
    _id?: ObjectId,
    title: string,
    author: ObjectId,
    library: ObjectId,
    pages: Number,
    genre: Genre,
    createdAt?: Date
}