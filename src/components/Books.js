import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import Book from './Book';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  const PrintBooks = ({ list }) => list.map((book) => (
    <Book title={book.title} category={book.category} Author={book.author} key={book.id} />
  ));
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
