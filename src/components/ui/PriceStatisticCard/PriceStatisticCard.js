import React from 'react';
import { addComma } from '../../../utils/utilsFuncs';
import classes from './PriceStatisticCard.module.scss';

const PriceStatisticsCard = ({ type, label, price, currency }) => {
  const dotColor = type?.toLowerCase() === 'high' ? 'red' : 'yellowgreen';

  if (!price || price === 0) {
    return null;
  }

  return (
    <div className={classes.StatisticsCard}>
      <div className={classes.IconLabel}>
        {type && (
          <span
            className={classes.Dot}
            style={{ backgroundColor: 'grey' && dotColor }}
          ></span>
        )}
        {label && <label>{label}</label>}
      </div>
      <span>{`${currency ? currency : ''}${addComma(price)}`}</span>
    </div>
  );
};

export default PriceStatisticsCard;
