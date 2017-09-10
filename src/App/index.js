import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard';
import BookDetail from './components/BookDetail';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Dashboard />
    );
  }
}

export default connect()(App);
