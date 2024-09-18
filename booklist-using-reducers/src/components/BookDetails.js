import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const handleRemoveBook = () => {
    dispatch({ type: "REMOVE_BOOK", id });
  };
  return (
    <li
      onClick={handleRemoveBook}
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
