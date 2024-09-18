import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  let { books } = useContext(BookContext)|| { books: [] }; // Handle undefined context
  
  return books.length ? (
    <div className="book-list">
      <ul>
        // remove return statement in map function use implicit return
        //what is implicit return 
        //Use implicit returns when your function consists of a single expression or 
        //when you're directly returning a value. If the function logic becomes more
        //complex (like multiple lines of code or conditionals), it's often clearer to  
        // use explicit returns.
        {books.map((book) => (
           <BookDetails book={book} key={book.id}></BookDetails>;
        ))}
      </ul>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time</div>
  );
};

export default BookList;
