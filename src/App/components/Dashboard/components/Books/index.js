import React from 'react';
import { Link } from 'react-router-dom';
import Book from './components/Book';
import './Books.css';

function Books(props) {
  return (
    <div className='dashboard'>
      {
        props.books.map((book) =>
          <Link to={`/book/${ book.id }`} key={ book.id } >
            <Book book={ book } />
          </Link>
        )
      }
    </div>
  );
};

export default Books;
