
import { Author } from './types/Author';
import { AuthorModel } from './model/Author';
import mongoose from 'mongoose';
import { Book } from './types/Book';
import { Genre } from './types/GenreEnum';
import { BookModel } from './model/Book';
import { Library } from './types/Library';
import { LibraryModel } from './model/Library';
import { addBookToAuthor } from './controller/AuthorController';
import { ObjectId } from 'mongodb';
require('dotenv').config();

// getting string from env to avoid git leaks
const uri: string = process.env.DATABASESTRING!;

{/*const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});*/}

const testAuther: Author = {
  
  name:"jack",
  age:12,
  books:[],
  createdAt: undefined
}


const testLibrary: Library = {
  
  name: "good library",
  books: undefined,
  createdAt: undefined
}

async function run() {
  try{
      await mongoose.connect(uri);
      
      //await AuthorModel.create(testAuther);
      
      //await LibraryModel.create(testLibrary);


      const authours: Author[] = await AuthorModel.find({});
      console.log(authours);

      const Library: Library[] = await LibraryModel.find({});
      console.log(Library);

      const testBook: Book = {
        
        title: "godbog",
        author: authours[0]._id,
        library: Library[0]._id,
        pages: 12,
        genre: Genre.FANTASY,
        createdAt: undefined
      }

       //await BookModel.create(testBook);
      
    
    
     console.log(await BookModel.find({title: "godbog"}));
    
  } catch(e){
    console.log(e);
    
  }
}


run().then(() => {
  console.log("db connected");
  
}).catch(() => {
  console.log("connection to db failed");
  
})