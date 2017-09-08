import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import App from './screens/App/App.js';
// import Dashboard from './screens/App/screens/Dashboard';
// import BookDetail from './screens/App/screens/BookDetail';
// import Login from './screens/App/screens/Login';
import './index.css';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
