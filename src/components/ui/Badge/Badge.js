import React from 'react';
import classes from './Badge.module.scss';

const Badge = ({ number, width, height, bgColor }) => {
  if (!number) {
    return null;
  }

  return (
    <span
      style={{ width, height, backgroundColor: bgColor }}
      className={classes.Badge}
    >
      {number}
    </span>
  );
};

export default Badge;
