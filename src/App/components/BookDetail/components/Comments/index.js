import React from 'react';
import MakeComment from './components/MakeComment';
import ShowComment from './components/ShowComment';

const Comments = () =>
  <div>
    <h3 className='section-title'>Comentarios</h3>
    <MakeComment />
    <ShowComment />
  </div>

export default Comments;
