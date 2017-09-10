import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'redux-first-router-link';

import BookInfo from './components/BookInfo';
import Suggestions from './components/Suggestions';
import Comments from './components/Comments';

const BookDetailLayout = ({ book }) =>
  <div>
    <Link to={{ type: 'DASHBOARD' }}>
        &lt; Volver
    </Link>
    <div className='book-detail'>
      <BookInfo book={ book } />
      <Suggestions />
      <Comments />
    </div>
  </div>;

BookDetailLayout.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    image_url: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default connect()(BookDetailLayout);
