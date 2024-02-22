import mongoose from 'mongoose';
const { Schema } = mongoose;
import { Genre } from '../types/GenreEnum'
import { Book } from '../types/Book';


const bookSchema = new mongoose.Schema({
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
    min: [1, 'must have a positive number of pages'],
    validate: {
      validator: function(value: number) {
        // Check if value is a positive number
        return value > 0;
      },
      message: (props: {value: number}) => `${props.value} must be a positive number of pages!`
    }
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

bookSchema.post('save', async function(doc, next) {
  try {
    const authorId = this.author;
    const libraryId = this.library;
    const bookId = this._id;

    if( ) {
      
    }

  }
})



export const BookModel = mongoose.model<Book>('BookSchema', bookSchema);

{/*title (String)
author (ObjectId)
library (ObjectId)
pages (Number)
genre (enum: 'fiction', 'non-fiction', 'fantasy', 'mystery', 'thriller', 'romance', 'biography', 'history', 'science', 'other')
createdAt (Date)*/}