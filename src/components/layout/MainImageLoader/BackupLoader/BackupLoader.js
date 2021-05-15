import React from 'react';
import classes from './BackupLoader.module.css';

const BackupLoader = ({ text }) => {
  return (
    <div className={classes.MainLoader}>
      <span className={classes.inner}></span>
      <span className={classes.textLoading}>Loading...</span>
    </div>
  );
};

export default BackupLoader;
