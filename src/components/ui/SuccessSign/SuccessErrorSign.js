import React, { Fragment } from 'react';
import classes from './SuccessErrorSign.module.css';

const SuccessSign = ({ isError }) => {
  return (
    <div className={classes.Container}>
      <div className={`${classes.Circle} ${isError ? classes.Error : ''}`}>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 130.2 130.2'
        >
          <circle
            className={`${classes.path} ${classes.circle}`}
            fill='none'
            stroke='#fff'
            strokeWidth='2'
            strokeMiterlimit='10'
            cx='65.1'
            cy='65.1'
            r='62.1'
          />
          {!isError && (
            <polyline
              className={`${classes.path} ${classes.check}`}
              fill='none'
              stroke='#fff'
              strokeWidth='6'
              strokeLinecap='round'
              strokeMiterlimit='10'
              points='100.2,40.2 51.5,88.8 29.8,67.5 '
            />
          )}

          {isError && (
            <Fragment>
              <line
                className={`${classes.path} ${classes.line}`}
                fill='none'
                stroke='#fff'
                strokeWidth='6'
                strokeLinecap='round'
                strokeMiterlimit='10'
                x1='34.4'
                y1='37.9'
                x2='95.8'
                y2='92.3'
              />
              <line
                className={`${classes.path} ${classes.line}`}
                fill='none'
                stroke='#fff'
                strokeWidth='6'
                strokeLinecap='round'
                strokeMiterlimit='10'
                x1='95.8'
                y1='38'
                x2='34.4'
                y2='92.2'
              />
            </Fragment>
          )}
        </svg>
      </div>
    </div>
  );
};

export default SuccessSign;
