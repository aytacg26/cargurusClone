import React from 'react';
import Button from '../../ui/Button/Button';
import classes from './Financing.module.css';
import card from '../../../assets/images/financing/credit_card.png';
import clock from '../../../assets/images/financing/fast_clock.png';
import chart from '../../../assets/images/financing/chart.png';
import IconCard from '../../ui/IconCard/IconCard';

const Financing = ({ header, to, onClick, btnType, btnTitle, style }) => {
  return (
    <div className={classes.Financing} style={style}>
      {header && <h3>{header}</h3>}
      <div className={classes.Presentation}>
        <IconCard image={card} text='No impact on your credit score' />
        <IconCard image={clock} text='Only takes minutes' />
        <IconCard image={chart} text='Personalized, real rates' />
        <span>
          <Button btnType={btnType} to={to} onClick={onClick}>
            {btnTitle}
          </Button>
        </span>
      </div>
    </div>
  );
};

export default Financing;
