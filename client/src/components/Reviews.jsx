import React from 'react';
import User from './User.jsx';
import Stars from './Stars.jsx';

const Reviews = (props) => (
  <div className="review">
    { props.reviews.map((review) => {
      return (
        <div className="review-container">
          <div className="user-container">
            <User username={review.username ? review.username : "OpenTable Diner"} 
              city={review.city ? review.city : ""}
              state={review.state ? review.state : ""}/>
          </div>
          <div className="review-text-container">
            <div className="star-container">
              <Stars starRating={review.overall_rating} /> 
            </div>
            <div className="review-time">
              <span>Dined on </span>
              <span>{review.review_time.slice(0,15)}</span>
            </div>
            <div className="ratings-container">
              <span>Overall </span>
              <span className="rating">{review.overall_rating}</span>
              <span> Food </span>
              <span className="rating">{review.food_rating}</span>
              <span> Service </span>
              <span className="rating">{review.service_rating}</span>
              <span> Ambience </span>
              <span className="rating">{review.ambience_rating}</span>
            </div>
            <br />
            <div className="review-text">
              <span>{review.review_text}</span>
              <br />
              <br />
            </div>
            <div className="icon-container">
              <img src= './flag.png' />
              <span> Report </span>
              <img src='./helpful.png' />
              <span> Helpful </span>
            </div>
            <br />
          </div>
        </div>
      )
    })}
  </div>
)

export default Reviews;