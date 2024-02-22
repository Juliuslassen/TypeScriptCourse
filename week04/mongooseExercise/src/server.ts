import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb'; 
import { Author } from './types/Author';
import { AuthorModel } from './model/Author';
import mongoose from 'mongoose';
import { Book } from './types/Book';
import { Genre } from './types/GenreEnum';
import { BookModel } from './model/Book';
import { Library } from './types/Library';
import { LibraryModel } from './model/Library';
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

const testBook: Book = {
  title: "godbog",
  author: undefined,
  library: undefined,
  pages: 12,
  genre: Genre.FANTASY,
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
      //await BookModel.create(testBook);
      await LibraryModel.create(testLibrary);

      const authours: Author[] = await AuthorModel.find({})
      console.log(authours);
      
      const Books: Book[] = await BookModel.find({});
      console.log(Books);

      const Library: Library[] = await LibraryModel.find({});
      console.log(Library);
      

  } catch(e){
    console.log(e);
    
  }
}


run().then(() => {
  console.log("db connected");
  
}).catch(() => {
  console.log("connection to db failed");
  
})