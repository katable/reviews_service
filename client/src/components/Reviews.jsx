import React from 'react';
import User from './User.jsx';

const Reviews = (props) => (
  <div className="review">
    { props.sampleReviews.map((sampleReview) => {
      return (
        <div className="review-container">
        <div className="user-container">
          <User username={sampleReview.username ? sampleReview.username : "anonymous"} 
            city={sampleReview.city ? sampleReview.city : ""}
            state={sampleReview.state ? sampleReview.city : ""}/>
        </div>
        <div className="review-text-container">
          <div className="review-time">
            <span>Dined on </span><span>{sampleReview.review_time.slice(0,15)}</span>
          </div>
          <div className="ratings-container">
            <span>Overall </span>
            <span className="rating">{sampleReview.overall_rating}</span>
            <span> Food </span>
            <span className="rating">{sampleReview.food_rating}</span>
            <span> Service </span>
            <span className="rating">{sampleReview.service_rating}</span>
            <span> Ambience </span>
            <span className="rating">{sampleReview.ambience_rating}</span>
          </div>
          <br />
          <div className="review-text">
            <span>{sampleReview.review_text}</span>
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