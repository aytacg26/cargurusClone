import React from 'react';
import classes from './CircleIconContainer.module.scss';

const CircleIconContainer = ({ children, color, borderColor }) => {
  return (
    <div
      className={classes.Circle}
      style={{
        backgroundColor: color ? color : 'lightgrey',
        border: `1px solid ${borderColor ? borderColor : 'transparent'}`,
      }}
    >
      {children}
    </div>
  );
};

export default CircleIconContainer;
