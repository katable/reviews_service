import React from 'react';
import style from './style.css';

const Star = (props) => {

  return (
    <i className={props.colored ? `fas fa-star ${style.colored}` : `fas fa-star ${style.uncolored}`}></i>
  );
};

export default Star;