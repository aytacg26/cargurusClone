import React from 'react';
import classes from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={classes.LoaderContainer}>
      <div className={classes['lds-ripple']}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
