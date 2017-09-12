import React from 'react';
import './BookInfo.css';

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

function BookInfo(props) {
  const coverClass = props.book.image_url ? 'book-cover' : 'book-cover no-cover';
  return (
    <div className='book-container'>
      <img src={ props.book.image_url } className={ coverClass } alt=''/>
      <div className='book-info'>
        <h4 className='title'>{ props.book.title }</h4>
        <span className='author'>{ props.book.author }</span>
        <span className='year'>{ props.book.year }</span>
        <span>{ props.book.genre }</span>
        <p className='summary'>{ lorem }</p>
        <button type='button' className='rent-button'>Alquilar</button>
      </div>
    </div>
  );
}

export default BookInfo;