import { createSlice } from '@reduxjs/toolkit';

const initialstate = {
  value: [],
};

const booksReducer = createSlice({
  name: 'books',
  initialstate,
  reducers: {
    add: (state) => {
      state.value.push(['0']);
    },
  },
});

export default booksReducer;
