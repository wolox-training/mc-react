import React from 'react';
import userDefault from '../../../../../../../../assets/user.png';
import './MakeComment.css';

const MakeComment = props => 
  <div className='new-comment-container'>
    <img className='profile-picture' src={ userDefault } alt='User'/>
    <div className='new-comment'>
      <label className='add-comment'>Agregar comentario</label>
      <textarea className='comment-text'/>
      <button type='button' className='button-green'>Enviar</button>
    </div>
  </div>

export default MakeComment;
