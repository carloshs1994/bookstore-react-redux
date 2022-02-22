import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>bookstore</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </nav>
    <span>Log in</span>
  </header>
);

export default Header;
