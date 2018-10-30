import React from 'react';

const Reviews = (props) => (
  <div className="review">
    { props.sampleReviews.map((sampleReview) => {
      return (
        <div className="review-container">
          <div className="review-time">
            <span>Dined on </span><span>{sampleReview.review_time}</span>
          </div>
          <div className="ratings-container">
            <span><span>Overall </span>{sampleReview.overall_rating}</span>
            <span><span> Food </span>{sampleReview.food_rating}</span>
            <span><span> Service </span>{sampleReview.service_rating}</span>
            <span><span> Ambience </span>{sampleReview.ambience_rating}</span>
          </div>
          <br />
          <div classname="review-text">
            <span>{sampleReview.review_text}</span>
          </div>
          <br />
        </div>
      )
    })}
  </div>
)

// stars //date
// overall //food //service //ambience
// review

// on side
// icon
// username
// location
// number of reviews next to speech bubble

export default Reviews;


    // { props.sampleReviews.map((sampleReview) =>
    //   (<div> 
    //     <div className="review-container">
    //       {sampleReview.review_time}
    //     </div>
    //     <div className="ratings-container">
    //       <span>{sampleReview.overall_rating}</span>
    //       <span>{sampleReview.food_rating}</span>
    //       <span>{sampleReview.service_rating}</span>
    //       <span>{sampleReview.ambience_rating}</span>
    //     </div>
    //   <div>)
    // )};