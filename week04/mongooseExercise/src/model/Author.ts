import mongoose from 'mongoose';
import { Author } from '../types/Author';
const { Schema } = mongoose;

const authorSchema = new Schema<Author>({
  
  name: {
    type: String,
    require: true,
  }, // String is shorthand for {type: String}
  age: {
    type: Number,
    require: true,
    },
  books: [{
    type: Schema.Types.ObjectId,
    ref: "BookSchema",
    }],
  createdAt: {
    type: Date,
  }
});

authorSchema.pre('save', function(next) {
  if(!this.createdAt) {
    this.createdAt = new Date;
  } 
  next();
});

authorSchema.post('save', async function (doc) {
  await doc.populate('books');
});


//use the post middleware to populate the books property of the 
//Author model after saving it to the database. Why? 
//Because you want to get the full details of the books when you get the author. 
//Also do this for the Library model.
authorSchema.post('save', async function(next) {

})

export const AuthorModel = mongoose.model('AuthorSchema', authorSchema);