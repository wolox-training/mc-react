import React from 'react';
import PropTypes from 'prop-types';

import Filter from './components/Filter';
import Books from './components/Books';

const DashboardLayout = (props) =>
  <div className='books-container'>
    <Filter
      onAttrChange={ props.onAttrChange } 
      onValueChange={ props.onValueChange } 
      onFilter={ props.onFilter }
    />
    <Books books={ props.books } />
  </div>;

DashboardLayout.propTypes = {
  onAttrChange: PropTypes.func,
  onValueChange: PropTypes.func,
  onFilter: PropTypes.func,
  books: PropTypes.arrayOf(PropTypes.object)
};

export default DashboardLayout;
