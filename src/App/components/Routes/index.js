import React from 'react';
import { connect } from 'react-redux';

import Dashboard from '../Dashboard';
import BookDetail from '../BookDetail';

const RouteComponent = ({ route }) => {
  const Route = routes[route];
  return Route ? <Route /> : null;
};

const mapState = ({ route }) => ({ route })
export default connect(mapState)(RouteComponent)

const routes = {
  dashboard: Dashboard,
  bookDetail: BookDetail
};
