import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardLayout from './layout';
import { getBooks } from '../../../store/actions/booksActions';
import './Dashboard.css';

class Dashboard extends Component {
  state = {
    filterAttr: '',
    filterValue: '',
    filteredBooks: books
  }

  componentDidMount() {
    this.props.dispatch(getBooks());
  }

  handleValueChange = (event) => {
    this.setState({ filterValue: event.target.value });
  }

  handleAttrChange = (event) => {
    this.setState({ filterAttr: event.target.value });
  }

  filterBooks() {
    return books.filter((book) => {
      return book[this.state.filterAttr].toLowerCase().includes(this.state.filterValue.toLowerCase());
    });
  }

  changeBooks = (event) => {
    this.setState({
      filteredBooks: this.filterBooks()
    });
    event.preventDefault();
  }

  render() {
    return (
      <DashboardLayout
        books={ this.props.books }
        onAttrChange={ this.handleAttrChange }
        onValueChange={ this.handleValueChange }
        onFilter={ this.changeBooks }
      />
    );
  }

};

export default connect((state) => {
  books: state.dashboardReducer.books
})(Dashboard);
