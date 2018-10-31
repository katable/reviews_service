import React from 'react';
import Star from './Star.jsx';

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
}

const Stars = (props) => (
  <div className="stars-component">
    { createStars(props.starRating) }
  </div>
)

export default Stars;