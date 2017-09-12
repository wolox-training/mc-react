import { createStore, compose, applyMiddleware } from 'redux';

import { rootReducer, middleware, enhancer } from './routesMap';

const middlewares = applyMiddleware(middleware);

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  compose(enhancer, middlewares)
);
