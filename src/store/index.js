import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

import routesReducer from './reducers/routesReducer';

const history = createHistory();

const routesMap = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  BOOK_DETAIL: '/book/:id'
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const rootReducer = combineReducers({ location: reducer, routesReducer });
const middlewares = applyMiddleware(middleware);

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(enhancer, middlewares)
);
