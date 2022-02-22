import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    counter: booksReducer,
  },
});

export default store;
