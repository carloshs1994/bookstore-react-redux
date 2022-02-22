import React from 'react';

const Form = () => (
  <form>
    <label htmlFor="book-title">
      <input id="book-title" name="bookTitle" type="text" placeholder="Book Title" />
    </label>
    <label htmlFor="select-category">
      <select id="select-category" name="category">
        <option> Category </option>
        <option value="Romance">Romance</option>
        <option value="suspense">Suspense</option>
        <option value="fiction">Fiction</option>
        <option value="action">Action</option>
      </select>
    </label>
    <button type="submit">Add Book</button>
  </form>
);

export default Form;
