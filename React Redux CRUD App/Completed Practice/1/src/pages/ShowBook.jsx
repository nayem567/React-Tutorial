import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/books/bookSlice";
import { Link } from "react-router-dom";

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
              <h2>{title}</h2>
              <p>{author}</p>
              <button onClick={() => dispatch(deleteBook({id }))}>Delete Book</button>
              <Link to='/edit-book' state={{id, title, author}}>
                <button>Edit Book</button>
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default ShowBook;
