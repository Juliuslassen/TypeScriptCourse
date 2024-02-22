import mongoose from 'mongoose';
const { Schema } = mongoose;
import { Genre } from '../types/GenreEnum'
import { Book } from '../types/Book';

const bookSchema = new Schema<Book>({
  title: {
    type:String,
    require: true,
    },
  author: {
    require: true,
    type: Schema.Types.ObjectId,
    ref: "AuthorSchema"
  },
  library: {
    type: Schema.Types.ObjectId,
    ref: "LibrarySchema"
  },
  pages: {
    type: Number,
    require: true,
    min: [1, 'must have a positive number of pages']
  },
  genre: {
    type: String,
    enum: Genre,
    require: true
  },
  createdAt: {
    type: Date
  }
});

bookSchema.pre('save', function(next) {
  if(!this.createdAt) {
    this.createdAt = new Date;
  }
  next();
});

//Create a function that adds a book to an author. But what if the author doesn't exist or the book? Does the book already belong to another author?
bookSchema.post(, function(doc, next) {
  await doc.populate('')
  next();
})


export const BookModel = mongoose.model('BookSchema', bookSchema);

{/*title (String)
author (ObjectId)
library (ObjectId)
pages (Number)
genre (enum: 'fiction', 'non-fiction', 'fantasy', 'mystery', 'thriller', 'romance', 'biography', 'history', 'science', 'other')
createdAt (Date)*/}