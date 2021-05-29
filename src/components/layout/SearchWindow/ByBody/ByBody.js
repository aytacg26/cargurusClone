import React from 'react';
import ByPrice from '../ByPrice/ByPrice';
import Bodies from './Bodies';
import classes from './ByBody.module.scss';

const ByBody = ({ priceFilter }) => {
  return (
    <div className={classes.ByBody}>
      <Bodies />
      {priceFilter && <ByPrice />}
    </div>
  );
};

export default ByBody;
