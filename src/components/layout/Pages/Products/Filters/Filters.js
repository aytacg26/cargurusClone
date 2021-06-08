import React from 'react';
import { Fragment } from 'react';
import FilterWindow from '../FilterWindow/FilterWindow';
import classes from './Filters.module.scss';

const Filters = () => {
  return (
    <Fragment>
      <div className={classes.FilterHeader}>Header Area</div>
      <div className={classes.OptionsContainer}>
        <FilterWindow header='Make'></FilterWindow>
        <FilterWindow header='Model'></FilterWindow>
        <div>Day on Market</div>
        <FilterWindow header='Drivetrain'></FilterWindow>
        <FilterWindow header='Color'></FilterWindow>
        <FilterWindow header='Interior Color'></FilterWindow>
        <FilterWindow header='Fuel Type'></FilterWindow>
        <FilterWindow header='Engine'></FilterWindow>
        <FilterWindow header='Deal Ratings'></FilterWindow>
        <FilterWindow header='Average Dealer Rating'></FilterWindow>
        <FilterWindow header='Seller Type'></FilterWindow>
      </div>
    </Fragment>
  );
};

export default Filters;
