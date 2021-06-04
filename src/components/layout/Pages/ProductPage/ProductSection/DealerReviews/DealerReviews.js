import React from 'react';
import { Fragment } from 'react';
import Button from '../../../../../ui/Button/Button';
import ReviewBars from '../../../../../ui/ReviewBars/ReviewBars';
import UserReview from '../../../../../ui/UserReview/UserReview';
import classes from './DealerReviews.module.scss';

const DealerReviews = ({ reviews, header, onDelete }) => {
  if (!reviews || reviews.length === 0) {
    return <h3>No Reviews For This Dealer Yet.</h3>;
  }

  return (
    <Fragment>
      <div className={classes.Reviews}>
        <h3>{header}</h3>
        <ReviewBars reviews={reviews} />
        <div className={classes.Actions}>
          <Button btnType='primary'>Add Your Review</Button>
          <Button
            btnType='text'
            style={{ paddingRight: 0 }}
          >{`Read ${reviews.length} Reviews`}</Button>
        </div>
      </div>
      {reviews.map((review) => (
        <UserReview
          key={review.id}
          review={review}
          onDelete={() => onDelete(review.id)}
        />
      ))}
    </Fragment>
  );
};

export default DealerReviews;
