import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBook } from "../features/books/bookSlice";

const ShowBook = () => {
  const books = useSelector((state) => state.books);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Show Book</h2>
      <section>
        {books.map((book) => {
          const { id, title, author } = book;
          return (
            <article key={id}>
              <h2>Title: {title}</h2>
              <h3>Author: {author}</h3>
              <Link to="/editbook" state={{ id, title, author }}>
                <button>Edit Book</button>
              </Link>
              <button onClick={() => dispatch(deleteBook({ id }))}>
                Delete Book
              </button>
              <br />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ShowBook;
