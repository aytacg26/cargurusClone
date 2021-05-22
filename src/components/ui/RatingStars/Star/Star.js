import React from 'react';
import classes from './Star.module.css';

const Star = ({ starType }) => {
  const half = `${classes.StarIcon} ${classes.Half}`;
  const empty = classes.StarIcon;
  const full = `${classes.StarIcon} ${classes.Full}`;

  const starClass =
    starType?.toLowerCase() === 'full'
      ? full
      : starType?.toLowerCase() === 'half'
      ? half
      : empty;

  return (
    <div className={classes.StarContainer}>
      <span className={starClass}></span>
    </div>
  );
};

export default Star;
