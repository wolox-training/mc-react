import React from 'react';

function Book(props) {
  const coverClass = props.book.image_url ? 'book-cover' : 'book-cover no-cover';
  return (
    <div className='book' key={ props.book.id }>
      <img className={ coverClass } src={ props.book.image_url } alt='' />
      <div className='book-data'>
        <h5>{ props.book.author }</h5>
        <span className='title'>{ props.book.title }</span>
      </div>
    </div>
  );
}

export default Book;
