import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addBooksToApi } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const bookTitle = useRef(null);
  const bookAuthor = useRef(null);
  const bookCategory = useRef(null);
  const submitBooksToStore = (event) => {
    event.preventDefault();
    const newBook = {
      title: bookTitle.current.value,
      author: bookAuthor.current.value,
      category: bookCategory.current.value,
      id: uuid(),
    };
    dispatch(addBooksToApi(newBook));
  };

  return (
    <form>
      <label htmlFor="book-title">
        <input id="book-title" name="bookTitle" type="text" placeholder="Book Title" ref={bookTitle} required />
      </label>
      <label htmlFor="book-author">
        <input id="book-author" name="bookAuthor" type="text" placeholder="Author" ref={bookAuthor} required />
      </label>
      <label htmlFor="select-category">
        <select id="select-category" name="category" ref={bookCategory}>
          <option> Category </option>
          <option value="Romance">Romance</option>
          <option value="suspense">Suspense</option>
          <option value="fiction">Fiction</option>
          <option value="action">Action</option>
        </select>
      </label>
      <button type="submit" onClick={submitBooksToStore}>Add Book</button>
    </form>
  );
};

export default Form;
