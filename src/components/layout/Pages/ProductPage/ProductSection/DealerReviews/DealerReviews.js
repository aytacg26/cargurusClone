import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import Button from '../../../../../ui/Button/Button';
import ReviewBars from '../../../../../ui/ReviewBars/ReviewBars';
import UserReview from '../../../../../ui/UserReview/UserReview';
import Input from '../../../../../ui/Input/Input';
import DropDown from '../../../../../ui/DropDown/DropDown';
import classes from './DealerReviews.module.scss';

const filterByStar = [
  {
    id: 'all',
    name: 'All Reviews',
    value: 0,
  },
  {
    id: 'star-00005',
    name: '5 Star',
    value: 5,
  },
  {
    id: 'star-00004',
    name: '4 Star',
    value: 4,
  },
  {
    id: 'star-00003',
    name: '3 Star',
    value: 3,
  },
  {
    id: 'star-00002',
    name: '2 Star',
    value: 2,
  },
  {
    id: 'star-00001',
    name: '1 Star',
    value: 1,
  },
];

const sortBy = [
  {
    id: 'sort-00001',
    name: 'Newest First',
    value: 0,
  },
  {
    id: 'sort-00002',
    name: 'Oldest First',
    value: 1,
  },
  {
    id: 'sort-00003',
    name: 'Most Helpful First',
    value: 2,
  },
];

const DealerReviews = ({ reviews, header, onDelete }) => {
  const [sortedReviews, setSortedReviews] = useState([]);
  const [showReviews, setShowReviews] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedStar, setSelectedStar] = useState(0);
  const [selectedSort, setSelectedSort] = useState(0);

  useEffect(() => {
    let sorted;

    if (selectedSort === 0) {
      sorted = [...reviews].sort((review1, review2) => {
        return review2.date - review1.date;
      });
    } else if (selectedSort === 1) {
      sorted = [...reviews].sort((review1, review2) => {
        return review1.date - review2.date;
      });
    } else {
      sorted = [...reviews].sort((review1, review2) => {
        return (
          review2.reactions.likes.length -
          review2.reactions.dislikes.length -
          (review1.reactions.likes.length - review1.reactions.dislikes.length)
        );
      });
    }

    setSortedReviews(sorted);
  }, [reviews, selectedSort]);

  if (!reviews || reviews.length === 0) {
    return (
      <h3 className={classes.NoReviews}>No Reviews For This Dealer Yet.</h3>
    );
  }

  const handleReviewShow = () => {
    setShowReviews((prevState) => !prevState);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSelect = (selected) => {
    setSelectedStar(selected);
  };

  const handleSort = (selected) => {
    setSelectedSort(selected);
  };

  const clearFilter = () => {
    setSelectedStar(0);
  };

  const clearSort = () => {
    setSelectedSort(0);
  };

  const filteredByStar = selectedStar
    ? sortedReviews.filter((review) => review.stars === selectedStar)
    : sortedReviews;

  const reviewsUnderConditions = filteredByStar
    .filter(
      (review) =>
        review.text.includes(search) || review.user.fullName.includes(search)
    )
    .map((review) => (
      <UserReview
        key={review.id}
        review={review}
        onDelete={() => onDelete(review.id)}
      />
    ));

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
          <div className={classes.DropFilter}>
            <DropDown
              selectOptions={filterByStar}
              defaultOptionId='all'
              titleKey='name'
              valueKey='value'
              onSelect={handleSelect}
              drop={false}
              name='filter'
              onClear={clearFilter}
            />
            <DropDown
              selectOptions={sortBy}
              defaultOptionId='sort-00001'
              titleKey='name'
              valueKey='value'
              onSelect={handleSort}
              drop={false}
              name='filter'
              onClear={clearSort}
            />
          </div>
          <Input
            type='search'
            placeholder='Search in reviews...'
            style={{ border: '1px solid #ccc' }}
            value={search}
            onChange={handleSearch}
          />

          {reviewsUnderConditions.length !== 0 ? (
            reviewsUnderConditions
          ) : (
            <h3 className={classes.NoReviews}>
              No Reviews under given conditions
            </h3>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default DealerReviews;
