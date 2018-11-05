import React from 'react';
import style from './style.css';

const countRating5 = (list) => {
  let sum = 0;
  list.forEach(review => {
    if (review.overall_rating === 5) {
      sum ++;
    }
  })
  return sum;
};

const countRating4 = (list) => {
  let sum = 0;
  list.forEach(review => {
    if (review.overall_rating === 4) {
      sum ++;
    }
  })
  return sum;
};

const countRating3 = (list) => {
  let sum = 0;
  list.forEach(review => {
    if (review.overall_rating === 3) {
      sum ++;
    }
  })
  return sum;
};

const countRating2 = (list) => {
  let sum = 0;
  list.forEach(review => {
    if (review.overall_rating === 2) {
      sum ++;
    }
  })
  return sum;
};

const countRating1 = (list) => {
  let sum = 0;
  list.forEach(review => {
    if (review.overall_rating === 1) {
      sum ++;
    }
  })
  return sum;
};

const BarGraph = (props) => {
  const lengthOf5 = countRating5(props.ratingsInfo);
  const lengthOf4 = countRating4(props.ratingsInfo);
  const lengthOf3 = countRating3(props.ratingsInfo);
  const lengthOf2 = countRating2(props.ratingsInfo);
  const lengthOf1 = countRating1(props.ratingsInfo);
  const outOfPercentage = props.ratingsInfo.length;
  return (
    <div className ={style.bargraph} >
      <div>
        <span className={style.barNumber}>5</span>
        <div className={style.barLine}>
          <div className={style.barLineRed} style={{width: (lengthOf5/outOfPercentage)*300+"px"}}></div>
        </div>
      </div>

      <div>
        <span className={style.barNumber}>4</span>
        <div className={style.barLine}>
          <div className={style.barLineRed} style={{width: (lengthOf4/outOfPercentage)*300+"px"}}></div>
        </div>
      </div>

      <div>
        <span className={style.barNumber}>3</span>
        <div className={style.barLine}>
          <div className={style.barLineRed} style={{width: (lengthOf3/outOfPercentage)*300+"px"}}></div>
        </div>
      </div>

      <div>
        <span className={style.barNumber}>2</span>
        <div className={style.barLine}>
          <div className={style.barLineRed} style={{width: (lengthOf2/outOfPercentage)*300+"px"}}></div>
        </div>
      </div>

      <div> 
        <span className={style.barNumber}>1</span>
        <div className={style.barLine}>
          <div className={style.barLineRed} style={{width: (lengthOf1/outOfPercentage)*300+"px"}}></div>
        </div>
      </div>
    </div>
  )
};

export default BarGraph;