import React, { Component } from 'react';
import books from '../../../resources/books.json';
import BookDetailScreen from './screen';

class BookDetail extends Component {
  state = {
    book: null
  }

  findBook = () => {
    const bookId = parseInt(this.props.match.params.bookId, 10);
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
      <BookDetailScreen book={ this.state.book } />
    );
  }
}

export default BookDetail;
