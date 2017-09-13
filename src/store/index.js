import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';

import { reducer, middleware, enhancer } from './routesMap';
import routesReducer from './reducers/routesReducer';

import dashboardReducer from './reducers/dashboardReducer';

const middlewares = applyMiddleware(middleware, createLogicMiddleware());

const reducers = combineReducers({ location: reducer, routesReducer, dashboardReducer });

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(enhancer, middlewares)
);
