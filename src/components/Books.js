import React from 'react';
import Form from './Form';
import Book from './Book';

const Books = () => (
  <main>
    <ul className="books">
      <Book title="title 1" category="Romance" />
      <Book title="title 2" category="Suspense" />
    </ul>
    <Form />
  </main>
);

export default Books;
