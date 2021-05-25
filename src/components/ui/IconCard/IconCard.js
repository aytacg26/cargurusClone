import React from 'react';
import classes from './IconCard.module.css';

const IconCard = ({ image, text, title, alt }) => {
  return (
    <div className={classes.PresentationGroup} title={title || text}>
      <img src={image} alt={alt || text} />
      <span>{text}</span>
    </div>
  );
};

export default IconCard;
