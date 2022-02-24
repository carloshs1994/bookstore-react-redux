import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooksFromApi } from '../redux/books/books';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const PrintBooks = ({ list }) => list.map((book) => (
    <Book
      title={book.titleForObj}
      category={book.category}
      Author={book.authorForObj}
      key={book.id}
      bookId={book.id}
    />
  ));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooksFromApi());
  }, [dispatch]);
  PrintBooks.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
  return (
    <main>
      <ul className="books">
        <PrintBooks list={bookList} />
      </ul>
      <Form />
    </main>
  );
};
export default Books;
