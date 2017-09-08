import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const routesMap = { 
  LOGIN: '/login',
  DASHBOARD: '/dashboard',      // action <-> url path
  BOOK_DETAIL: '/book/:id'  // :id is a dynamic segment
};

const { reducer, middleware, enhancer } = connectRoutes(history, routesMap);

const rootReducer = combineReducers({ location: reducer });
const middlewares = applyMiddleware(middleware);

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(enhancer, middlewares)
);
