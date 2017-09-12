import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const coverClass = book.image_url ? 'book-cover' : 'book-cover no-cover';
  return (
    <div className='book' key={ book.id }>
      <img className={ coverClass } src={ book.image_url } alt='' />
      <div className='book-data'>
        <h5>{ book.author }</h5>
        <span className='title'>{ book.title }</span>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default Book;
