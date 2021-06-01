import React from 'react';
import Star from '../RatingStars/Star/Star';
import classes from './ReviewBar.module.scss';

const ReviwBar = ({ fullStarNumber, totalReviews, starReviews }) => {
  const stars = [];
  const fillerWidth =
    starReviews && totalReviews ? (starReviews * 280) / totalReviews : 0;
  const percent =
    starReviews && totalReviews ? (starReviews * 100) / totalReviews : 0;

  for (let i = 0; i < 5; i++) {
    if (i < fullStarNumber) {
      stars.push({
        id: `review-star-full-${i + 5}`,
        type: 'full',
      });
    } else {
      stars.push({
        id: `review-star-empty-${i + 5}`,
        type: '',
      });
    }
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Stars}>
        {stars.map((star) => (
          <Star starType={star.type} key={star.id} />
        ))}
      </div>
      <div className={classes.BarContainer}>
        <span style={{ width: fillerWidth }}></span>
      </div>
      <span className={classes.Percentage}>{`${percent.toFixed(2)}%`}</span>
    </div>
  );
};

export default ReviwBar;
