import React from 'react';
import { connect } from 'react-redux';

import Navbar from './components/shared/Navbar';
import Dashboard from './components/Dashboard';
import BookDetail from './components/BookDetail';
import Login from './components/Login';

const routes = {
  Dashboard,
  BookDetail,
  Login
};

const App = ({ route }) => {
  const Route = routes[route];
  return (
    <div>
      <Navbar />
      <Route />
    </div>
  );
};

export default connect((state) => ({
  route: state.routesReducer
}))(App)
