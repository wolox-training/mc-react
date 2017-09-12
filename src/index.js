import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';

import registerServiceWorker from './registerServiceWorker';
import App from './App';
import Dashboard from './App/components/Dashboard';
import BookDetail from './App/components/BookDetail';
import Login from './App/components/Login';
import './index.css';

ReactDOM.render(
  <Router history={history}>
    <div>
      <Route exact path='/' component={ App } />
      <Route exact path='/login' component={ Login } />
      <Route exact path='/dashboard' component={ Dashboard } />
      <Route exact path='/book/:bookId' component={ BookDetail } />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
