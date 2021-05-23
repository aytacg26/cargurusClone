import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({ onClick, hide }) => {
  const backdropClass = `${classes.Backdrop} ${!hide ? classes.Show : ''}`;

  return <div className={backdropClass} onClick={onClick}></div>;
};

export default Backdrop;
