import React from 'react';
import Button from '../../../ui/Button/Button';
import classes from './Financing.module.css';
import card from '../../../../assets/images/financing/credit_card.png';
import clock from '../../../../assets/images/financing/fast_clock.png';
import chart from '../../../../assets/images/financing/chart.png';

const Financing = () => {
  return (
    <div className={classes.Financing}>
      <h3>Shop with real rates in hand</h3>
      <div className={classes.Presentation}>
        <div
          className={classes.PresentationGroup}
          title='No impact on your credit score'
        >
          <img src={card} alt='No impact on your credit score' />
          <span>No impact on your credit score</span>
        </div>
        <div className={classes.PresentationGroup} title='Only takes minutes'>
          <img src={clock} alt='Only takes minutes' />
          <span>Only takes minutes</span>
        </div>
        <div
          className={classes.PresentationGroup}
          title='Personalized, real rates'
        >
          <img src={chart} alt='Personalized, real rates' />
          <span>Personalized, real rates</span>
        </div>
        <span>
          <Button btnType='success' to='/financing'>
            See my options
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Financing;
