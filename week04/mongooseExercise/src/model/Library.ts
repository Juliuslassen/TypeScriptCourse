import mongoose from 'mongoose';
import { Library } from '../types/Library';
const { Schema } = mongoose;

const librarySchema = new mongoose.Schema({
  
  name: {
    type:String,
    require: true,
    },
  books: [{
    require: true,
    type: Schema.Types.ObjectId,
    ref: "BookSchema"
  }],
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

librarySchema.post('save', async function(doc, next) {
  await doc.populate('books');
  next();
})

export const LibraryModel = mongoose.model('LibrarySchema', librarySchema);

{/*name (String)
books (Array of ObjectIds)
createdAt (Date)*/}