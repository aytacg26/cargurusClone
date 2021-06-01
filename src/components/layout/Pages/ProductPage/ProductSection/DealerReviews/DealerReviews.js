import React from 'react';
import Button from '../../../../../ui/Button/Button';
import ReviewBars from '../../../../../ui/ReviewBars/ReviewBars';
import classes from './DealerReviews.module.scss';

const DealerReviews = ({ reviews, header }) => {
  if (!reviews || reviews.length === 0) {
    return <h3>No Reviews For This Dealer Yet.</h3>;
  }

  return (
    <div>
      <h3>Dealer Reviews</h3>
      <ReviewBars reviews={reviews} />
      <div className={classes.Actions}>
        <Button btnType='primary'>Add Your Review</Button>
        <Button
          btnType='text'
          style={{ paddingRight: 0 }}
        >{`Read ${reviews.length} Reviews`}</Button>
      </div>
    </div>
  );
};

export default DealerReviews;
