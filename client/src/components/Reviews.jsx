import React from 'react';
import User from './User.jsx';
import Stars from './Stars.jsx';
import style from './style.css';

const Reviews = (props) => (
  <div className={style.review}>
    { props.reviews.map((review) => {
      return (
        <div className={style.reviewContainer}>
          <div className={style.userContainer}>
            <User username={review.username ? review.username : "OpenTable Diner"} 
              city={review.city ? review.city : ""}
              state={review.state ? review.state : ""}/>
          </div>
          <div className={style.reviewContentContainer} style={{flex: 4, marginTop: "30px", paddingBottom: "20px"}}>
            <div className={style.reviewHeadingContainer}>
              <div className={style.starContainer}>
                <Stars starRating={review.overall_rating} /> 
              </div>
              <div className={style.reviewTime}>
                <span>&nbsp;Dined on </span>
                <span>{review.review_time.slice(0,15)}</span>
              </div>
              <div className={style.ratingsContainer}>
                <span>&nbsp;Overall </span>
                <span className={style.rating}>{review.overall_rating}</span>
                <span> Food </span>
                <span className={style.rating}>{review.food_rating}</span>
                <span> Service </span>
                <span className={style.rating}>{review.service_rating}</span>
                <span> Ambience </span>
                <span className={style.rating}>{review.ambience_rating}</span>
              </div>
              <div className={style.reviewText}>
                <p>{review.review_text}</p>
              </div>
            </div>
          </div>
          <div className={style.iconContainer}>
            <img src= 'https://s3.us-east-2.amazonaws.com/flag-opentable-reviews/flag.png' />
            <span> Report </span>
            <img src='https://s3.us-east-2.amazonaws.com/helpful-opentable-reviews/helpful.png' />
            <span> Helpful </span>
          </div>
          <br />
        </div>
      )
    })}
  </div>
)

export default Reviews;