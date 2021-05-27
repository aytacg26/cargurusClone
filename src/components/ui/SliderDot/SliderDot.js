import React from 'react';
import classes from './SliderDot.module.scss';

const SliderDot = ({ isActive }) => {
  const dotClass = `${classes.SliderDot} ${isActive ? classes.Active : ''}`;

  return <span className={dotClass}></span>;
};

export default SliderDot;
