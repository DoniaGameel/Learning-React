import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  let { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Reading list</h1>
      //Added conditional rendering for an empty state message.
      <p>
        {books.length > 0
          ? `Currently you have ${books.length} books to get through...`
          : "You have no books in your reading list."}
      </p>
    </div>
  );
};

export default Navbar;
