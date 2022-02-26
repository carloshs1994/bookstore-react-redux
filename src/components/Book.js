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
        <div className="book-buttons">
          <button type="button">
            Comments
          </button>
          <span>|</span>
          <button onClick={removeBooksFromStore} id={bookId} type="button">
            Remove
          </button>
          <span>|</span>
          <button type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress">
        <div>
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
            </div>
            <div className="inside-circle" />
          </div>
          <div className="progress-value">
            <h2>66%</h2>
            <p>Completed</p>
          </div>
        </div>
        <span />
        <div className="progress-chapter">
          <p>CURRENT CHAPTER</p>
          <h3>Chapter 9</h3>
          <button type="button">UPDATE PROGRESS</button>
        </div>
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
