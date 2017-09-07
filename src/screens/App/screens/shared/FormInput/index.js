import React from 'react';
import PropTypes from 'prop-types';

import './FormInput.css';

const FormInput = ({ type, label, name }) =>
  <div className='input-group'>
    <label className='label'>{label}</label>
    <input type={type} className='input' name={name} />
  </div>;

FormInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string
};

export default FormInput;
