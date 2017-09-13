import { combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

const routesMap = {
  LOGIN: '/login',
  DASHBOARD: '/',
  BOOK_DETAIL: '/book/:id'
};

const history = createHistory();
const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

export { reducer, middleware, enhancer };
