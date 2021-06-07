import React from 'react';
import classes from './SliderDot.module.scss';

const SliderDot = ({ isActive, onClick }) => {
  const dotClass = `${classes.SliderDot} ${isActive ? classes.Active : ''}`;

  return <span className={dotClass} onClick={onClick}></span>;
};

export default SliderDot;
