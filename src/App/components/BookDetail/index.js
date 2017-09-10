import React, { Component } from 'react';
import { connect } from 'react-redux';

import books from '../../../resources/books.json';
import BookDetailLayout from './layout';

class BookDetail extends Component {
  state = {
    book: null
  }

  findBook = () => {
    const bookId = parseInt(this.props.bookId, 10);
    const bookFound = books.filter((book) => {
      return book.id === bookId;
    })[0];
    this.setBook(bookFound);
  }

  setBook = (book) => {
    this.setState({ book });
  }

  componentWillMount = () => {
    this.findBook();
  }

  render() {
    return (
      <BookDetailLayout book={ this.state.book } />
    );
  }
}

export default connect((state) => ({
  bookId: state.location.payload.id
}))(BookDetail);
