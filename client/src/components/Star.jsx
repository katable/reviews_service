import React from 'react';

const Star = (props) => {
  return (
    <i className={props.colored ? 'fas fa-star colored' : 'fas fa-star uncolored'}></i>
  );
};

export default Star;