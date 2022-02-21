import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>bookstore</h1>
    <nav>
      <Link to="/">Books</Link>
      <span>|</span>
      <Link to="/categories">Categories</Link>
    </nav>
  </header>
);

export default Header;
