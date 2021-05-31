import React from 'react';
import classes from './CardWindow.module.scss';

const CardWindow = ({ header, cards, children }) => {
  return (
    <div className={classes.CardWindow}>
      <h3>{header}</h3>
      {cards ? cards : null}
      <div className={classes.TextSection}>{children}</div>
    </div>
  );
};

export default CardWindow;
