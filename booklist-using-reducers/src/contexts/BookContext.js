import React, { createContext, useEffect, useReducer } from "react";
import { bookReducer } from "../reducers/BookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  let [books, dispatch] = useReducer(
    bookReducer,
    [
      { title: "name of the wind", author: "patrick rothfuss", id: 1 },
      { title: "the final empire", author: "brandon sanderson", id: 2 },
    ],
    () => {
      const localData = localStorage.getItem("books");
      return localData ? JSON.parse(localData) : [];
    }
  );

  // for the local strage of the book
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
