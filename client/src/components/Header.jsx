import React from 'react';
import Stars from './Stars.jsx';
import BarGraph from './BarGraph.jsx';
import style from './style.css';

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

const whatPeopleWouldSay = (number) => {
  let str = "";
  if (number === 1) {
    str += "What 1 Person Is Saying";
  } else if (number > 1 || number === 0) {
    str += `What ${number} People Are Saying`;
  }
  return str;
}

const Header = (props) => {
  const averageRating = findOverallRatingOfRestaurant(props.restaurantInfo);
  return (
    <div className={style.topContainer}>
      <div className={style.lengthenTopBorder}></div>
      <div className={style.headerContainer}>
        <div className={style.headerTopContainer}>
          <div className={style.headerInfo}>
            <h1 className={style.titleText}>{whatPeopleWouldSay(props.reviewsCount)}</h1>
            <p className={style.emphasize}>Overall ratings and reviews</p>
            <p className={style.headerText}>Reviews can only be made by diners who have eaten at this restaurant</p>
            <div className={style.averageContainer}>
              <div className={style.avgRatingBlock}>
                <Stars starRating={Math.floor(averageRating)}/>
              </div>
              <span>{averageRating} stars based on recent ratings</span>
            </div>
            <br />
            <div className={style.averageBlock}>
              <span className={style.rating}>&nbsp;{findFoodRatingOfRestaurant(props.restaurantInfo)}</span>
              <span> Food </span>
              <span className={style.rating}>&nbsp;{findServiceRatingOfRestaurant(props.restaurantInfo)}</span>
              <span> Service </span>
              <span className={style.rating}>&nbsp;{findAmbienceRatingOfRestaurant(props.restaurantInfo)}</span>
              <span> Ambience </span>
            </div>
            <br />
            <div className={style.headerIconContainer}>
              <img src='https://s3.us-east-2.amazonaws.com/noise-opentable-reviews/noise.png' />
              <span> Noise - Moderate </span>
              <br />
              <br />
              <img src = 'https://s3.us-east-2.amazonaws.com/like-opentable-reviews/like.png' />
              <span>&nbsp;{wouldRecommend(props.restaurantInfo, props.reviewsCount)}% of people would recommend it to a friend </span>
            </div>
          </div>
          <div className={style.bargraphContainer}>
            <BarGraph ratingsInfo={props.restaurantInfo}/>
          </div>
        </div>
        <br />
        <div className={style.lovedFor}>
          <span className={style.emphasize}>Loved For </span><img src='https://s3.us-east-2.amazonaws.com/info-opentable-reviews/info.png'/>
          <br />
          <div className={style.award}>
            <img className={style.awardText} src= 'https://s3.us-east-2.amazonaws.com/trophy-opentable-reviews/trophy.png' />
            <span className={style.awardText}>&nbsp;Most Booked 1000-Point Tables</span>
            <span>{props.restaurantInfo.restaurantName}</span>
          </div>
        </div>
      </div>
      <div className={style.lengthenBottomBorder}></div>
    </div>
  );
}

export default Header;