import { combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

import routesReducer from './reducers/routesReducer';

const routesMap = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  BOOK_DETAIL: '/book/:id'
};

const history = createHistory();
const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const rootReducer = combineReducers({ location: reducer, routesReducer });

export { rootReducer, middleware, enhancer };
