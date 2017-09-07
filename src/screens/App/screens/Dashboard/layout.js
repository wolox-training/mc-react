import React from 'react';
import Filter from './components/Filter';
import Books from './components/Books';

function DashboardLayout(props) {
  return (
    <div className='books-container'>
      <Filter
        onAttrChange={ props.onAttrChange } 
        onValueChange={ props.onValueChange } 
        onFilter={ props.onFilter }
      />
      <Books books={ props.books } />
    </div>
  );
};

export default DashboardLayout;
