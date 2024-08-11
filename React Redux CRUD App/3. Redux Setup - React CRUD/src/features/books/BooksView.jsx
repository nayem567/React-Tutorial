import React from 'react'
import { useSelector } from 'react-redux'

const BooksView = () => {

  const books = useSelector((state) => state.books);

  console.log(books);

  return (
    <div>
      <h2>View Books</h2>
    </div>
  )
}

export default BooksView