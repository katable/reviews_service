import React from 'react';
import style from './style.css'

const NoReviews = (props) => (
    <div className={style.noReviewsContainer}>
        <h1>Be The First to Review This Restaurant</h1>
        <p>Write a review</p>
        <br/>
        <p>At present, {props.restaurantName} has no reviews. Please add a review after your dining experience to help others make a decision about where to eat.</p> 
    </div>
)

export default NoReviews;

//add restaurant name here? At present, restaurantName has no reviews.