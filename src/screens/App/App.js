import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dashboard from './screens/Dashboard';

class App extends Component {
  render() {
    return (
      <Dashboard />
    );
  }
}

export default connect()(App);
