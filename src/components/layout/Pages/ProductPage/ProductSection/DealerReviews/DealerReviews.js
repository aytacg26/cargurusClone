import React, { useState } from 'react';
import { Fragment } from 'react';
import Button from '../../../../../ui/Button/Button';
import ReviewBars from '../../../../../ui/ReviewBars/ReviewBars';
import UserReview from '../../../../../ui/UserReview/UserReview';
import Input from '../../../../../ui/Input/Input';
import classes from './DealerReviews.module.scss';

const DealerReviews = ({ reviews, header, onDelete }) => {
  const [showReviews, setShowReviews] = useState(false);
  const [search, setSearch] = useState('');

  if (!reviews || reviews.length === 0) {
    return <h3>No Reviews For This Dealer Yet.</h3>;
  }

  const handleReviewShow = () => {
    setShowReviews((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  console.log(reviews);

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
            onClick={handleReviewShow}
          >
            {!showReviews ? `Read ${reviews.length} Reviews` : 'Hide reviews'}
          </Button>
        </div>
      </div>
      {showReviews && (
        <Fragment>
          <Input
            type='search'
            placeholder='Search in reviews...'
            style={{ border: '1px solid #ccc' }}
            value={search}
            onChange={handleSearch}
          />
          {reviews
            .filter(
              (reviews) =>
                reviews.text.includes(search) ||
                reviews.user.fullName.includes(search)
            )
            .map((review) => (
              <UserReview
                key={review.id}
                review={review}
                onDelete={() => onDelete(review.id)}
              />
            ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default DealerReviews;
