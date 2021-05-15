import React from 'react';
import classes from './SliderContent.module.css';

const SliderContent = ({ left, children }) => {
  const contentClass = `${classes.SliderContent} ${
    left === 0 ? classes.Move : ''
  }`;

  return (
    <div className={contentClass} style={{ left: `${left}%` }}>
      {children}
    </div>
  );
};

export default SliderContent;
