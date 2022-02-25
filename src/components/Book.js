import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooksFromApi } from '../redux/books/books';

const Book = ({
  title,
  category,
  Author,
  bookId,
}) => {
  const dispatch = useDispatch();
  const removeBooksFromStore = (event) => {
    dispatch(removeBooksFromApi(event.target.id));
  };
  return (
    <li className="book">
      <div className="info">
        <p className="category">{category}</p>
        <h2>{title}</h2>
        <p className="author">{Author}</p>
        <button onClick={removeBooksFromStore} id={bookId} type="button">
          Remove
        </button>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  Author: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default Book;
