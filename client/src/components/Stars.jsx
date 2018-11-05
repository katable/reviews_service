import React from 'react';
import Star from './Star.jsx';
import style from './style.css';

const createStars = (numStars) => {
  const uncoloredStars = 5 - numStars;
  let stars = []
  for(let i = 0; i < numStars; i++) {
    stars.push(<Star colored={true}/>);
  }
  for(let i = 0; i < uncoloredStars; i++) {
    stars.push(<Star colored={false}/>);
  }
  return stars;
};

const Stars = (props) => (
  <div className={style.starsComponent}>
    { createStars(props.starRating) }
  </div>
);

export default Stars;