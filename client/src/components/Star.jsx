import React from 'react';
import style from './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Star = (props) => {
  return (
    <FontAwesomeIcon icon={faStar} className={props.colored ? `star ${style.colored}` : `star ${style.uncolored}`} />
  );
};

export default Star;