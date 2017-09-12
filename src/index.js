import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './App/components/Dashboard';
import BookDetail from './App/components/BookDetail';
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
