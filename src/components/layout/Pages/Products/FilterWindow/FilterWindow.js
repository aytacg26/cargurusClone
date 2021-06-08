import React from 'react';
import classes from './FilterWindow.module.scss';

const FilterWindow = ({ header, children }) => {
  return (
    <div className={classes.Container}>
      <h4>{header}</h4>
      <div className={classes.Window}>{children}</div>
    </div>
  );
};

export default FilterWindow;
