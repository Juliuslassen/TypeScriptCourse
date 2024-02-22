import { ObjectId } from "mongodb";
import { AuthorModel } from "../model/Author";
import { Book } from "../types/Book";
import { Author } from "../types/Author";
import { BookModel } from "../model/Book";






//Create a function that adds a book to an author. 
//But what if the author doesn't exist or the book? 
//Does the book already belong to another author?
export async function addBookToAuthor(_author: Author, booktitle: String) {
  
    const author: Author | null = await AuthorModel.findById({_id: _author._id});
    if(!author){
      throw new Error('no author with that id')
    }
  
    const existingBook: Book | null = await BookModel.findOne({ title: booktitle });
      if (!existingBook) {
          throw new Error('Book doesnt exists');
      }
  
      //checks if book belongs to another author 
      {/*const bookBelongsToAnotherAuthor = await BookModel.findOne({ title: booktitle, author: { $ne:{_id: authorID} } });
      if (bookBelongsToAnotherAuthor) {
          throw new Error('Book already belongs to another author');
      } */}
  
      AuthorModel.find({_id: _author._id})
      .populate('books')
      .exec();

  }