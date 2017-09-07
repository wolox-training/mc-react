import React from 'react';
import { Link } from 'react-router-dom';
import BookInfo from './components/BookInfo';
import Suggestions from './components/Suggestions';
import Comments from './components/Comments';

function BookDetailLayout(props) {
  return (
    <div>
      <Link to='/dashboard'>
          &lt; Volver
      </Link>
      <div className='book-detail'>
        <BookInfo book={ props.book } />
        <Suggestions />
        <Comments />
      </div>
    </div>
  );
}

export default BookDetailLayout;
