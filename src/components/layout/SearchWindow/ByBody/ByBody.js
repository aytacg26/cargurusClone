import React from 'react';
import ByPrice from '../ByPrice/ByPrice';
import Bodies from './Bodies';
import classes from './ByBody.module.css';

const ByBody = () => {
  return (
    <div className={classes.ByBody}>
      <Bodies />
      <ByPrice />
    </div>
  );
};

export default ByBody;
