import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from './components/Book';
import './Books.css';

const Books = ({ books }) =>
  <div className='dashboard'>
    {books.map(book =>
      <Link to={`/book/${ book.id }`} key={ book.id } >
        <Book book={ book } />
      </Link>
    )}
  </div>;

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
};

export default Books;
