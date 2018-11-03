import React from 'react';
import Stars from './Stars.jsx';
import BarGraph from './BarGraph.jsx';

const findOverallRatingOfRestaurant = (list) => {
  let sum = 0;
  list.forEach(review => {
    sum += review.overall_rating;
  });
  return parseFloat((sum/list.length).toFixed(1));
};

const findFoodRatingOfRestaurant = (list) => {
  let sum = 0;
  list.forEach(review => {
    sum += review.food_rating;
  })
  return parseFloat((sum/list.length).toFixed(1));
};

const findServiceRatingOfRestaurant = (list) => {
  let sum = 0;
  list.forEach(review => {
    sum += review.service_rating;
  })
  return parseFloat((sum/list.length).toFixed(1));
};

const findAmbienceRatingOfRestaurant = (list) => {
  let sum = 0;
  list.forEach(review => {
    sum += review.ambience_rating;
  })
  return parseFloat((sum/list.length).toFixed(1));
};

const wouldRecommend = (list, listLength) => {
  let arr = [];
  let sum = 0;
  list.forEach(review => {
    if (review.overall_rating >= 3) {
      arr.push(1);
    }
  })
  arr.forEach(count => {
    sum += count;
  })
  return Math.ceil((sum/listLength)*100);
};

const Header = (props) => {
  const averageRating = findOverallRatingOfRestaurant(props.restaurantInfo);
  return (
    <div className="top-container">
      <div className="header-container">
        <div className="header-top-container">
          <div className="header-info">
            <h1>What {props.reviewsCount} People Are Saying</h1>
            <p className="emphasize">Overall ratings and reviews</p>
            <p>Reviews can only be made by diners who have eaten at this restaurant</p>
            <div className="average-container">
              <div className="avg-rating-block">
                <Stars starRating={Math.floor(averageRating)}/>
              </div>
              <span>{averageRating} stars based on recent ratings</span>
            </div>
            <br />
            <div className="average-block">
              <span className="rating">&nbsp;{findFoodRatingOfRestaurant(props.restaurantInfo)}</span>
              <span> Food </span>
              <span className="rating">&nbsp;{findServiceRatingOfRestaurant(props.restaurantInfo)}</span>
              <span> Service </span>
              <span className="rating">&nbsp;{findAmbienceRatingOfRestaurant(props.restaurantInfo)}</span>
              <span> Ambience </span>
            </div>
            <br />
            <div className="header-icon-container">
              <img src='./noise.png' />
              <span> Noise - Moderate </span>
              <br />
              <br />
              <img src = './like.png' />
              <span>&nbsp;{wouldRecommend(props.restaurantInfo, props.reviewsCount)}% of people would recommend it to a friend </span>
            </div>
          </div>
          <div className="bargraph-container">
            <BarGraph ratingsInfo={props.restaurantInfo}/>
          </div>
        </div>
        <br />
        <div className="LovedFor">
          <span className="emphasize">Loved For </span><img src='./info.png'/>
          <br />
          <div className="award">
            <img className="award-text" src= './trophy.png' />
            <span className="award-text">&nbsp;Most Booked 1000-Point Tables</span>
            <span>{props.restaurantInfo.restaurantName}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;