import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/books/bookSlice";
import { Link } from "react-router-dom";

const ShowBook = () => {
  const books = useSelector((state) => state.books);
  console.log(books);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Show Book</h2>
      {books.map((book) => {
        const { id, title, author } = book;
        return (
          <article key={id}>
            <h2>{title}</h2>
            <h2>{author}</h2>
            <Link to="/editBook" state={{ id, title, author }}>
              <button>Edit</button>
            </Link>
            <button onClick={() => dispatch(deleteBook({ id }))}>Delete</button>
          </article>
        );
      })}
    </div>
  );
};

export default ShowBook;
