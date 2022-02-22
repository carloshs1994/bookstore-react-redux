import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => (
  <main>
    <ul className="books">
      <Book title="title" category="Romance" />
    </ul>
    <Form />
  </main>
);

export default Books;
