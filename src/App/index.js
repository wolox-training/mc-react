import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../history';
import Dashboard from './components/Dashboard';
import BookDetail from './components/BookDetail';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path='/' component={ Dashboard } />
          <Route exact path='/login' component={ Login } />
          <Route exact path='/book/:bookId' component={ BookDetail } />
        </div>
      </Router>
    );
  }
}

export default App;
