import React from 'react';
import classes from './DirectionButton.module.scss';

const DirectionButton = ({ direction, onClick, style, id, disabled }) => {
  if (!direction) {
    return null;
  }

  const arrowDirection = direction.toLowerCase();
  const buttonClass = `${classes.Direction} ${
    arrowDirection ? classes[arrowDirection] : classes.right
  } ${disabled ? classes.disabled : ''}`;

  return (
    <span
      onClick={onClick}
      className={buttonClass}
      style={style}
      id={id}
    ></span>
  );
};

export default DirectionButton;
