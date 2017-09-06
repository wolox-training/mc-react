import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './screens/App/App.js';
import Dashboard from './screens/App/screens/Dashboard';
import BookDetail from './screens/App/screens/BookDetail';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <div>
      <Route exact path='/' component={ App } />
      <Route exact path='/dashboard' component={ Dashboard } />
      <Route exact path='/book/:bookId' component={ BookDetail } />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
registerServiceWorker();
