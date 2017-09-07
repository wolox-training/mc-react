import React from 'react';
import './FormInput.css';

const FormInput = ({ type, label, name }) =>
  <div className='input-group'>
    <label className='label'>{label}</label>
    <input type={type} className='input' name={name} />
  </div>;

export default FormInput;
