import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../features/books/bookSlice";

const AddBook = () => {

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const hanldeSubmit = (e) =>{
    e.preventDefault();

    dispatch(addBook({id: new Date().getTime().toString() * 3, title, author}));
    navigate('/showBooks', {replace:true});
    setTitle('');
    setAuthor('');
  }

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={hanldeSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-field">
            <label htmlFor="author">Author: </label>
            <input type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
