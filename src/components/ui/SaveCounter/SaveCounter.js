import React from 'react';
import { FaHeart } from 'react-icons/fa';
import classes from './SaveCounter.module.scss';

const SaveCounter = ({ count }) => {
  if (!count) {
    return null;
  }

  return (
    <div className={classes.Counter}>
      <span>{count}</span>
      <span>{count === 1 ? 'save' : 'saves'}</span>
      <span>
        <FaHeart size={14} color='#0277bd' />
      </span>
    </div>
  );
};

export default SaveCounter;
