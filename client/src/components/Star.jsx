import React from 'react';

const Star = (props) => {
  return (
    <span className={props.colored ? 'fas fa-star colored' : 'fas fa-star uncolored'}></span>
  );
};

export default Star;