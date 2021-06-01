import React from 'react';
import ReviwBar from '../ReviewBar/ReviwBar';
import classes from './ReviewBars.module.scss';

const ReviewBars = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return null;
  }

  const total = reviews.length;
  const fiveStar = reviews.filter((review) => review.stars === 5).length;
  const fourStar = reviews.filter((review) => review.stars === 4).length;
  const threeStar = reviews.filter((review) => review.stars === 3).length;
  const twoStar = reviews.filter((review) => review.stars === 2).length;
  const oneStar = reviews.filter((review) => review.stars === 1).length;

  return (
    <div className={classes.ReviewBars}>
      <ReviwBar
        fullStarNumber={5}
        totalReviews={total}
        starReviews={fiveStar}
      />
      <ReviwBar
        fullStarNumber={4}
        totalReviews={total}
        starReviews={fourStar}
      />
      <ReviwBar
        fullStarNumber={3}
        totalReviews={total}
        starReviews={threeStar}
      />
      <ReviwBar fullStarNumber={2} totalReviews={total} starReviews={twoStar} />
      <ReviwBar fullStarNumber={1} totalReviews={total} starReviews={oneStar} />
    </div>
  );
};

export default ReviewBars;
