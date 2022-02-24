import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kkQKmrjtK2Q8iaDR7VT7/books';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const addBooksToApi = (newBook) => async (dispatch) => {
  const {
    id,
    title,
    category,
  } = newBook;
  const bookForAPI = {
    item_id: id,
    title,
    category,
  };
  await axios.post(url, bookForAPI);
  const books = await axios.get(url);
  console.log(books);
  dispatch(addBook(newBook));
};

export const removeBooksFromApi = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`);
  const books = await axios.get(url);
  console.log(books);
  dispatch(removeBook(id));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      /*
      return a new state object in which the books array will contain a new book object,
      passed by action.payload.
      Remember -  you MUSN'T mutate the state. You have to return a new state object - i.e.:
      */
      return [...state, action.payload];
    case REMOVE_BOOK:
      /*
      use ES6 filter() method to create a new array,
      which will not contain the book you want to remove from the store
      (filter by the id key - i.e.:
        */
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default reducer;
