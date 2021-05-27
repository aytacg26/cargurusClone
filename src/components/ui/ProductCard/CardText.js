import React from 'react';
import { textEllipsis } from '../../../utils/utilsFuncs';
import classes from './CardText.module.scss';

const CardText = ({ header, author, text }) => {
  const revisedText = textEllipsis(text, 35);

  return (
    <div className={classes.TextSection}>
      <h2>{header}</h2>
      <span>{author}</span>
      <p>{revisedText}</p>
    </div>
  );
};

export default CardText;
