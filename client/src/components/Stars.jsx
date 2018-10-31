import React from 'react';

function countRatings (rating) {
  let numStarsUnrated = 5 - rating
  return numStarsUnrated
}

const Stars = (props) => (
  <div className="stars-component">
    {countRatings(props.starRating)}
  </div>
)

export default Stars;

//ratings: 3
//numStarsUnrated: 5-3 = 2