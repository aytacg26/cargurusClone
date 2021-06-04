import React from 'react';
import ReviewStars from '../RatingStars/ReviewStars/ReviewStars';
import classes from './ReviewBar.module.scss';

const ReviwBar = ({ fullStarNumber, totalReviews, starReviews }) => {
  const fillerWidth =
    starReviews && totalReviews ? (starReviews * 280) / totalReviews : 0;
  const percent =
    starReviews && totalReviews ? (starReviews * 100) / totalReviews : 0;

  return (
    <div className={classes.Container}>
      <ReviewStars starNumber={fullStarNumber} />
      <div className={classes.BarContainer}>
        <span style={{ width: fillerWidth }}></span>
      </div>
      <span className={classes.Percentage}>{`${percent.toFixed(2)}%`}</span>
    </div>
  );
};

export default ReviwBar;
