import React from 'react';
import './Suggestions.css';

function Suggestions(props) {
  return (
    <div className='suggestions'>
      <h3 className='section-title'>Sugerencias</h3>
      <div className='suggestions-container'>
        <img className='suggestion book-cover no-cover' alt='' />
        <img className='suggestion book-cover no-cover' alt='' />
        <img className='suggestion book-cover no-cover' alt='' />
        <img className='suggestion book-cover no-cover' alt='' />
      </div>
    </div>
  );
};

export default Suggestions;
