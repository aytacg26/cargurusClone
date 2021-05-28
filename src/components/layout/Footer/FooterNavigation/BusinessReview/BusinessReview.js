import React from 'react';
import classes from './BusinessReview.module.scss';
import blackSeal from '../../../../../assets/images/blackseal.png';

export const BusinessReview = () => {
  return (
    <div className={classes.FooterBlackSeal}>
      <a
        href='#!'
        target='_blank'
        title='Click for the business review of Car World Inc.'
      >
        <img src={blackSeal} alt='Black Seal Review' />
      </a>
    </div>
  );
};
