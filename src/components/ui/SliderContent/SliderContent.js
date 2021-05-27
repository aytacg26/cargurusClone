import React from 'react';
import classes from './SliderContent.module.scss';

const SliderContent = ({ left, children }) => {
  const contentClass = `${classes.SliderContent} ${
    left === 0 ? classes.Move : ''
  }`;

  return (
    <div
      className={contentClass}
      style={{
        left: `${left}%`,
        justifyContent: children.length > 2 ? 'space-between' : 'space-evenly',
      }}
    >
      {children}
    </div>
  );
};

export default SliderContent;
