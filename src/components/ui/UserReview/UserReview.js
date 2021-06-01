import React from 'react';
import Card from '../Card/Card';
import classes from './UserReview.module.scss';

const UserReview = () => {
  return (
    <Card>
      <div className={classes.ReviewData}>
        <div>User Section</div>
        <div>Date Section</div>
      </div>
      <div className={classes.ReviewText}>Text Area</div>
    </Card>
  );
};

export default UserReview;
