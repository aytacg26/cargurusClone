import React from 'react';
import Star from '../Star/Star';
import classes from './RatingStarPresentation.module.css';
import { starObjArray } from '../../../../utils/utilsFuncs';

const RatingStarPresentation = ({ rate }) => {
  const content = starObjArray(rate);

  return (
    <div
      className={classes.Stars}
      title={`This dealer has an average rating of ${rate} out of 5`}
    >
      {content.map((star) => (
        <Star starType={star.starType} key={star.id} />
      ))}
      <span className={classes.StarRate}>{`(${rate}/5)`}</span>
    </div>
  );
};

export default RatingStarPresentation;
