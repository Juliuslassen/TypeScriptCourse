import mongoose from 'mongoose';
import { Library } from '../types/Library';
const { Schema } = mongoose;

const librarySchema = new Schema<Library>({
  
  name: {
    type:String,
    require: true,
    },
  books: {
    require: true,
    type: Schema.Types.ObjectId,
    ref: "BookSchema"
  },
  createdAt: {
    type: Date
  }
});


librarySchema.pre('save', function(next) {
  if(!this.createdAt){
    this.createdAt = new Date;
  }
  next();
});

export const LibraryModel = mongoose.model('LibrarySchema', librarySchema);

{/*name (String)
books (Array of ObjectIds)
createdAt (Date)*/}