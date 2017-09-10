import React from 'react';
import userDefault from '../../../../../../../assets/user.png';
import './ShowComment.css';

const ShowComment = () =>
  <div className='comment'>
    <img className='profile-picture' src={ userDefault } alt='User'/>
    <div className='comment-info'>
      <span className='user-name'>User Name</span>
      <span className='comment-date'>xx/xx/xx</span>
      <p className='comment-text'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>

export default ShowComment;
