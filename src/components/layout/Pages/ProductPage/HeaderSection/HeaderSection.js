import React from 'react';
import classes from './HeaderSection.module.css';

const HeaderSection = ({ productHeader, location, dealer }) => {
  return (
    <div className={classes.DetailsHeaderSection}>
      <h1>{productHeader}</h1>
      <h4>{`${location ? location : ''} ${location ? '-' : ''} ${
        dealer ? dealer : ''
      }`}</h4>
    </div>
  );
};

export default HeaderSection;
