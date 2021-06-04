import React from 'react';
import Star from '../Star/Star';
import classes from './ReviewStars.module.scss';

const ReviewStars = ({ starNumber }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < starNumber) {
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
    <div className={classes.Stars}>
      {stars.map((star) => (
        <Star starType={star.type} key={star.id} />
      ))}
    </div>
  );
};

export default ReviewStars;
