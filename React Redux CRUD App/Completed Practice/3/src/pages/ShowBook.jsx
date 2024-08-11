import { useDispatch, useSelector } from 'react-redux'
import { deleteBook } from '../features/books/bookSlice';
import { Link } from 'react-router-dom';

const ShowBook = () => {

  const books = useSelector((state) => state.books);
  console.log(books);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Show Book</h2>
      <section>
        {books.map((book) => {
          const {id, title, author} = book;
          return(
            <article key={id}>
              <h2>Title: {title}</h2>
              <p>Author: {author}</p>
              <Link to='/editbook' state={{id, title, author}} >
                <button>Edit Book</button>
              </Link>
              <button onClick={() => dispatch(deleteBook({id}))}>Delete</button>
            </article>
          )
        })}
      </section>
    </div>
  )
}

export default ShowBook