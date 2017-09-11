import React from 'react';
import { connect } from 'react-redux';

import Dashboard from './components/Dashboard';
import BookDetail from './components/BookDetail';
import Login from './components/Login';

const routes = {
  Dashboard,
  BookDetail,
  Login
};

const RouteComponent = ({ route }) => {
  const Route = routes[route];
  return Route ? <Route /> : null;
};

export default connect((state) => ({
  route: state.routesReducer
}))(RouteComponent)
