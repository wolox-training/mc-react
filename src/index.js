import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import RouteComponent from './App/components/Routes';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <RouteComponent />
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
