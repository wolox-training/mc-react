import React from 'react';

import FormInput from '../shared/FormInput';
import './Login.css';

const LoginLayout = ({ onSubmit, showError }) =>
  <div className='login-container'>
    <h1>Login</h1>
    {showError &&
      <span className='error'>Las credenciales no son válidas</span>
    }
    <form className='login-form' onSubmit={onSubmit} noValidate>
      <FormInput
        label='User'
        type='email'
        name='user'
      />
      <FormInput
        label='Password'
        type='password'
        name='password'
      />
      <div className='buttons-container'>
        <button type='submit' className='button-green'>
          LogIn
        </button>
      </div>
    </form>
  </div>;

export default LoginLayout;
