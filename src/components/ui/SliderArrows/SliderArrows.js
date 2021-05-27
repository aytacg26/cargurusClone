import React from 'react';
import DirectionButton from '../DirectionButtons/DirectionButton';
import classes from './SliderArrows.module.scss';

const SliderArrows = ({ onSlide, disableLeft, disableRight }) => {
  return (
    <div className={classes.SliderArrows}>
      <span className={classes.ArrowLeft}>
        <DirectionButton
          direction='left'
          onClick={onSlide}
          id='left'
          disabled={disableLeft}
        />
      </span>
      <span className={classes.ArrowRight}>
        <DirectionButton
          direction='right'
          onClick={onSlide}
          id='right'
          disabled={disableRight}
        />
      </span>
    </div>
  );
};

export default SliderArrows;
