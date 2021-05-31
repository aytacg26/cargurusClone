import React from 'react';
import classes from './ReviewCardsContainer.module.scss';

const ReviewCardsContainer = ({ children }) => {
  return <div className={classes.ReviewCards}>{children}</div>;
};

export default ReviewCardsContainer;
