import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';
const initialState = [];
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kkQKmrjtK2Q8iaDR7VT7/books';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const getBook = (payload) => ({
  type: GET_BOOKS,
  payload,
});

export const addBooksToApi = (newBook) => async (dispatch) => {
  const {
    id,
    titleForObj,
    authorForObj,
    category,
  } = newBook;
  const stringWithTitleAndAuthor = JSON.stringify({
    realTitle: titleForObj,
    realAuthor: authorForObj,
  });
  const bookForAPI = {
    item_id: id,
    title: stringWithTitleAndAuthor,
    category,
  };
  await axios.post(url, bookForAPI);
  dispatch(addBook(newBook));
};

export const removeBooksFromApi = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`);
  dispatch(removeBook(id));
};

export const getBooksFromApi = () => async (dispatch) => {
  const objWithBooks = await axios.get(url);
  const books = Object.entries(objWithBooks.data).map(([id, arr]) => {
    const { title, category } = arr[0];
    const { realTitle, realAuthor } = JSON.parse(title);
    return {
      id,
      titleForObj: realTitle,
      authorForObj: realAuthor,
      category,
    };
  });
  dispatch(getBook(books));
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
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
