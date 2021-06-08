import React from 'react';
import classes from './PageTopImage.module.scss';

const PageTopImage = ({ image, title }) => {
  return (
    <div className={classes.ImageSection}>
      <img src={image} alt={title} title={title} />
    </div>
  );
};

export default PageTopImage;
