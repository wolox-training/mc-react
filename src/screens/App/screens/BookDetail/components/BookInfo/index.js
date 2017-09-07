import React from 'react';
import PropTypes from 'prop-types';

import './BookInfo.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

const BookInfo = ({ book }) => {
  const coverClass = book.image_url ? 'book-cover' : 'book-cover no-cover';
  return (
    <div className='book-container'>
      <img src={ book.image_url } className={ coverClass } alt=''/>
      <div className='book-info'>
        <h4 className='title'>{ book.title }</h4>
        <span className='author'>{ book.author }</span>
        <span className='year'>{ book.year }</span>
        <span>{ book.genre }</span>
        <p className='summary'>{ lorem }</p>
        <button type='button' className='rent-button'>Alquilar</button>
      </div>
    </div>
  );
}

BookInfo.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    image_url: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default BookInfo;
