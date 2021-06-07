import React from 'react';
import DirectionButton from '../../DirectionButtons/DirectionButton';
import classes from './Arrows.module.scss';

const Arrows = ({ images, counter, onClick }) => {
  return (
    <div className={classes.Arrows}>
      <DirectionButton
        direction='left'
        id='left'
        onClick={onClick}
        disabled={counter === images.length}
      />
      <DirectionButton
        direction='right'
        id='right'
        onClick={onClick}
        disabled={counter === 1}
      />
    </div>
  );
};

export default Arrows;
