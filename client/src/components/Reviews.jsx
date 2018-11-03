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
          <div className="review-content-container" style={{flex: 4, marginTop: "30px", paddingBottom: "20px"}}>
            <div className="review-heading-container">
              <div className="star-container">
                <Stars starRating={review.overall_rating} /> 
              </div>
              <div className="review-time">
                <span>&nbsp;Dined on </span>
                <span>{review.review_time.slice(0,15)}</span>
              </div>
              <div className="ratings-container">
                <span>&nbsp;Overall </span>
                <span className="rating">{review.overall_rating}</span>
                <span> Food </span>
                <span className="rating">{review.food_rating}</span>
                <span> Service </span>
                <span className="rating">{review.service_rating}</span>
                <span> Ambience </span>
                <span className="rating">{review.ambience_rating}</span>
              </div>
              <div className="review-text">
                <p>{review.review_text}</p>
              </div>
            </div>
          </div>
          <div className="icon-container">
            <img src= './flag.png' />
            <span> Report </span>
            <img src='./helpful.png' />
            <span> Helpful </span>
          </div>
          <br />
        </div>
      )
    })}
  </div>
)

export default Reviews;