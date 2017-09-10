import React, { Component } from 'react';

import { login } from '../../../services/userService';
import LoginLayout from './layout';
import { setLoginInfo } from '../../../auth';

class Login extends Component {
  state = {
    showError: false
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: event.target.user.value,
      password: event.target.password.value
    };
    login(user).then((response) => {
      setLoginInfo(response.data);
    }).catch((error) => {
      this.setState({ showError: true });
    })
  }

  render() {
    return (
      <LoginLayout
        onSubmit={this.handleSubmit}
        showError={this.state.showError}
      />
    );
  }
}

export default Login;
