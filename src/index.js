import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import history from './history';

import registerServiceWorker from './registerServiceWorker';
import App from './screens/App/App.js';
import Dashboard from './screens/App/screens/Dashboard';
import BookDetail from './screens/App/screens/BookDetail';
import Login from './screens/App/screens/Login';
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
