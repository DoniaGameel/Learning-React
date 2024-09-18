import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  let { dispatch } = useContext(BookContext);
  const [author, setAutor] = useState("");
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  dispatch({ type: "ADD_BOOK", book: { title, author } });
  setTitle("");
  setAuthor("");
};
  
  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        required
        type="text"
        placeholder="book title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        required
        type="text"
        placeholder="book author"
        value={author}
        onChange={(e) => {
          setAutor(e.target.value);
        }}
      />

      <input type="submit" value={"Add Book"} />
    </form>
  );
};

export default NewBookForm;
